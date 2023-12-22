import { NUL } from '@typings/common';

import { ethers } from 'ethers';

import { getSecurePhrase } from '@/functions/tauri';

export const getPublicKey = async (mnemonic: string): Promise<NUL<string>> => {
    try {
        const walletMnemonic = ethers.Wallet.fromPhrase(mnemonic);
        return walletMnemonic.address;
    } catch (error: any) {
        console.error('[Get Public Key error]: ', error?.message ?? error);
    }
    return null;
};

export const getEthBalance = async (): Promise<{ balance: NUL<string>; publicKey: NUL<string> }> => {
    try {
        const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_ETH_URL);
        const mnemonic = await getSecurePhrase();
        const publicKey = await getPublicKey(mnemonic);
        const balance = await provider.getBalance(publicKey ?? '');
        return { balance: ethers.formatEther(balance), publicKey };
    } catch (error: any) {
        console.error('[Get ETH balance error]: ', error?.message ?? error);
    }
    return { balance: null, publicKey: '' };
};
