import { useEffect } from 'react';

import { useAppStore } from '@/providers/AppProvider';
import { getEthBalance } from '@/functions/ethers';

export const useGetWalletBalance = () => {
    const { balance, updateBalance, publicKey, updatePublicKey, handleAuth } = useAppStore((state) => ({
        balance: state.balance,
        updateBalance: state.updateBalance,
        publicKey: state.publicKey,
        updatePublicKey: state.updatePublicKey,
        handleAuth: state.handleAuth,
    }));

    useEffect(() => {
        (async () => {
            const { balance: coins, publicKey } = await getEthBalance();
            updateBalance(coins);
            updatePublicKey(publicKey);
            if (publicKey) {
                handleAuth(true);
            }
        })();
    }, []);

    return { balance, publicKey };
};
