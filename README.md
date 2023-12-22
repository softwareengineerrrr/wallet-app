<div align="center">

  <h1>Wallet App 👛</h1>

### Wallet app made with Tauri

---

<div align="left">

## ▶️ ️Overview

-  Wallet Creation Screen with 12-word mnemonic phrase
-  Wallet Dashboard 
-  Show the Ethereum (ETH) balance associated with the wallet
-  Balance updates in real-time with refresh option
-  Due to security reasons 12-word mnemonic phrase & private key stored on Rust-side
-  User-friendly interface, intuitive, and visually appealing

## ⚡ How To run
Make sure that [Node.js installed](https://nodejs.org/en) on your computer.
Open terminal & execute next command:
```
npm i
tauri dev
```
App will open automatically after building
Or you can open [http://localhost:3000](http://localhost:3000) to view it in the browser. 

After launching app you can create a new wallet. Just add username & password. And app will generate secured 12-word mnemonic phrase for you. <b>It's very important to save this phrase because if you lose it you’ll not be able to access your wallet.</b> 
When your wallet has been created you will see your Ethereum balance. You can refresh it manually but not more than once a minute. Walled ID, Private key, Secure phrase will available through the user menu.

## ⚡ Available Scripts

In the project directory, you can run:

-   ### Install dependencies
    Before first start this script should be executed.
    #### `pnpm install`

-   ### DEV mode Tauri
    Run app in dev mode
    #### `pnpm run tauri-dev`
    [Tauri desktop app](https://tauri.app/v1/guides/) will be shown. \
    Also you can open [http://localhost:3000](http://localhost:3000) to view it in the browser.
-   ### Build Tauri Production
    #### `pnpm run tauri-build`
    Build .exe application with Tauri. \
    Currently have issue with styles inside desktop app. \
    For more info, see Issues block

-   ### ES LINT

    #### `pnpm run lint`

    Runs eslint & prettier checks

-   ### Update dependencies
    #### `pnpm run post-update`
    Update all outdated dependencies to latest from CDN.
    But it's tricky. \
    Better solution do it manually: \
    Firstly run script
    #### `pnpm outdated`
    And then pick outdated dependencies that you want to update.

## 💡 Known Issues
1. It's demo project with test environment. <span style="color:#EE8282FF">DO NOT PROVIDE</span> your ETH_URL to anybody.
2. <i style="color:#EE8282FF">Emotion breaks styles during production builds for dektop apps.</i>

## 📋 Can be improved
-   [ ] Next static --> Vite to avoid problems with styles hydration
-   [ ] Transfer between accounts
-   [ ] Add wallet import
-   [ ] Add multi wallets