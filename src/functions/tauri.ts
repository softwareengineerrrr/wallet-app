import { UserEntity } from '@typings/model';

import { invoke } from '@tauri-apps/api/tauri';

import { isBrowser } from '@/utils/browserUtils';

export const handleIsTauri = () => Boolean(isBrowser && window.__TAURI_IPC__ !== undefined);

export const generateSecurePhrase = async (user: UserEntity): Promise<string[]> => {
    try {
        return invoke<string[]>('generate_values', {
            username: user.username,
            password: user.password,
        });
    } catch (e) {
        console.error(e);
    }
    return [''];
};

export const getPrivateKey = async (): Promise<string> => {
    try {
        return invoke('get_private_key');
    } catch (e) {
        console.error(e);
    }
    return '';
};

export const getSecurePhrase = async (): Promise<string> => {
    try {
        return await invoke('get_mnemonic');
    } catch (e) {
        console.error(e);
    }
    return '';
};
