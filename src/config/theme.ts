import { PaletteMode, Theme } from '@mui/material';
import { TypographyVariants } from '@mui/material/styles';

import { defaultZIndex } from '@/utils/MUI/themeOverrides';
import { AvenirNextFont } from '@/config/localFonts';

export const LIGHT_COLORS = {};

export const DARK_COLORS = {
    bgPrimaryDark: '#020202',
    disabledDark: '#292727',
    buttonPrimaryDark: '#C6E4DA',
    buttonHoveredDark: '#B6E9D9',
    grey800: '#535353',
};

// Create a theme instance.
const commonThemeSettings: Pick<Theme, 'direction' | 'zIndex' | 'typography' | 'components'> = {
    direction: 'ltr',
    zIndex: defaultZIndex,
    typography: {
        fontFamily: AvenirNextFont.style.fontFamily,
    } as TypographyVariants,
    components: {
        MuiIconButton: {
            defaultProps: {
                disableRipple: true,
                disableFocusRipple: true,
                disableTouchRipple: true,
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
                disableTouchRipple: true,
            },
        },
        MuiNativeSelect: {
            styleOverrides: {
                select: {
                    backgroundColor: 'transparent',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    backgroundColor: 'transparent',
                    '&:focus': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    '::before': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
    },
};

// Override common theme instance with dark theme colors.
const commonDarkThemeSettings: Pick<Theme, 'direction' | 'components' | 'typography'> = {
    ...commonThemeSettings,
    components: {
        ...commonThemeSettings.components,
        MuiButton: {
            styleOverrides: {
                contained: {
                    borderRadius: '4px',
                    padding: '12px 24px',
                    fontFamily: AvenirNextFont.style.fontFamily,
                    textTransform: 'capitalize',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: 'normal',
                    textAlign: 'center',
                    color: DARK_COLORS.bgPrimaryDark,
                    backgroundColor: DARK_COLORS.buttonPrimaryDark,
                    '&:hover': {
                        backgroundColor: DARK_COLORS.buttonHoveredDark,
                    },
                    '&:disabled': {
                        backgroundColor: DARK_COLORS.disabledDark,
                        color: 'rgba(255, 255, 255, 0.50)',
                        fontWeight: 500,
                    },
                },
                text: {
                    padding: '10px',
                    fontFamily: AvenirNextFont.style.fontFamily,
                    textTransform: 'capitalize',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: 'normal',
                    textAlign: 'center',
                    color: 'rgba(255, 255, 255, 0.70)',
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: 'white',
                    },
                },
            },
        },
    },
    typography: {
        ...commonThemeSettings.typography,
    } as TypographyVariants,
};

const getPaletteTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'dark'
            ? {
                  primary: {
                      main: DARK_COLORS.buttonPrimaryDark,
                  },
                  background: {
                      default: DARK_COLORS.bgPrimaryDark,
                  },
                  grey: {
                      800: DARK_COLORS.grey800,
                  },
              }
            : {}),
    },
});

export { commonThemeSettings, commonDarkThemeSettings, getPaletteTokens };
