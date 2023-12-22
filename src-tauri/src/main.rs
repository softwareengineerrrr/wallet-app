// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use bip39::{Language, Mnemonic};
use ethereum_types::H256;
use sha3::{Digest, Sha3_256};
use tauri::command;
use zeroize::Zeroize;
use std::sync::{Arc, Mutex};
use tauri::State;

struct AppState {
    mnemonic: Mutex<Option<String>>,
    private_key: Mutex<Option<String>>,
}

#[command]
fn generate_values(state: State<Arc<AppState>>, username: String, password: String) -> (String, String) {
    let username = username.to_lowercase();
    let password = password.to_lowercase();
    let mut input = format!("{}{}", username, password);
    let pk = generate_private_key_from_input(&input);
    input.zeroize();
    let mnemonic = private_key_to_mnemonic(&pk);
    let private_key = format!("0x{:x}", pk);

    let mut app_state = state.mnemonic.lock().unwrap();
    *app_state = Some(mnemonic.clone());

    let mut private_key_state = state.private_key.lock().unwrap();
    *private_key_state = Some(private_key.clone());

    (private_key, mnemonic)
}

#[tauri::command]
fn get_mnemonic(state: State<Arc<AppState>>) -> Option<String> {
    let app_state = state.mnemonic.lock().unwrap();
    app_state.clone()
}

#[tauri::command]
fn get_private_key(state: State<Arc<AppState>>) -> Option<String> {
    let app_state = state.private_key.lock().unwrap();
    app_state.clone()
}

fn generate_private_key_from_input(input: &str) -> H256 {
    let mut hasher = Sha3_256::new();
    hasher.update(input.as_bytes());
    let result = hasher.finalize();
    H256::from_slice(&result)
}

fn private_key_to_mnemonic(private_key: &H256) -> String {
    let mnemonic = Mnemonic::from_entropy(private_key.as_bytes(), Language::English).unwrap();
    mnemonic.to_string()
}

fn main() {
    let app_state = Arc::new(AppState {
        mnemonic: Mutex::new(None),
        private_key: Mutex::new(None),
    });

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![generate_values, get_mnemonic, get_private_key])
        .manage(app_state.clone())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}