import { Theme, useMediaQuery } from '@mui/material';

import { BreakpointTypes } from '@/utils/MUI/breakpointOverrides';

/**
 * MUI media queries
 *
 * @param breakpoint
 * @type BreakpointTypes
 */
export const useMedia = (breakpoint: BreakpointTypes = 'tabletLarge') => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down(breakpoint)) ?? true;
    return { isMobile, isDesktop: !isMobile };
};
