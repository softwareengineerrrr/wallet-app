import { PaletteMode } from '@mui/material';

import { callbackType } from '@typings/common';

import { useAppStore } from '@/providers/AppProvider';

type RType = { toggleTheme: callbackType<PaletteMode>; isDark: boolean; isLight: boolean };

/**
 * Switch theme by condition
 * Just toggle to switch theme --> {@example () => toggleTheme()}
 * or select specific theme --> {@example () => toggleTheme('dark')}
 * available themes --> {@interface PaletteMode}
 */
export const useSwitchTheme = (): RType => {
    const { toggleTheme, mode } = useAppStore();
    return { toggleTheme, isDark: mode === 'dark', isLight: mode === 'light' };
};
