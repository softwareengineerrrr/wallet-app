import { useMemo } from 'react';

import { Theme, useMediaQuery } from '@mui/material';
import { enUS } from '@mui/material/locale';

import { commonDarkThemeSettings, commonThemeSettings, getPaletteTokens } from '@theme';

import { createCustomTheme } from '@/utils/MUI/themeOverrides';
import { useAppStore } from '@/providers/AppProvider';
import { useFixedVhProperty, useIsomorphicLayoutEffect } from '@/hooks';

interface IReturnType {
    theme: Theme;
}

/**
 * Detect device theme
 */
export const useDetectTheme = (): IReturnType => {
    useFixedVhProperty();
    const isDark: boolean = useMediaQuery('(prefers-color-scheme: dark)');

    const { mode, toggleTheme } = useAppStore((state) => ({ mode: state.mode, toggleTheme: state.toggleTheme }));

    useIsomorphicLayoutEffect(() => {
        toggleTheme(isDark ? 'dark' : 'light');
    }, [isDark]);

    const theme: Theme = useMemo(
        () =>
            createCustomTheme(getPaletteTokens(mode), {
                enUS,
                ...(mode === 'dark' ? commonDarkThemeSettings : commonThemeSettings),
            }),
        [mode],
    );

    return { theme };
};
