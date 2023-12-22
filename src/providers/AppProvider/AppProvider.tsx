import { PaletteMode } from '@mui/material';

import { create } from 'zustand';

import { AppAction, AppState } from './AppProvider.typings';

/**
 * Global app state
 */
export const useAppStore = create<AppState & AppAction>((set) => ({
    mode: 'dark',
    user: {
        username: null,
        password: null,
    },
    isAuth: false,
    balance: null,
    publicKey: null,
    timestamp: '',

    toggleTheme: (specMode?: PaletteMode) =>
        set((prev) => ({ mode: specMode ?? (prev.mode === 'dark' ? 'light' : 'dark') })),

    updateUser: (newUser) => {
        set({ user: newUser });
    },
    handleAuth: (value) => {
        set((ps) => ({ isAuth: value ?? !ps.isAuth }));
    },
    updateBalance: (newBalance) => {
        const currentDate = new Date();
        const currentHours = currentDate.getHours();
        const currentMinutes = currentDate.getMinutes();
        const currentTime = `${currentHours}:${currentMinutes < 10 ? `0` + currentMinutes : currentMinutes}`;

        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
        const currentYear = currentDate.getFullYear();
        const currentDateString = `${currentDay}/${currentMonth}/${currentYear}`;

        set({ balance: newBalance, timestamp: currentTime + ' ' + currentDateString });
    },
    updatePublicKey: (newKey) => {
        set({ publicKey: newKey });
    },
}));
