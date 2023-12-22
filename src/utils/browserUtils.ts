import { EMP } from '@typings/common';

export const isBrowser: boolean = typeof window !== 'undefined';

export const canUseDOM: boolean =
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined';

export const handleScrollTop = (props?: EMP<{ behavior: ScrollBehavior }>): void => {
    try {
        if (isBrowser) {
            window.scroll({
                top: 0,
                behavior: props?.behavior ?? 'smooth',
            });
        }
    } catch (e) {
        console.error('[handleScrollTop error]: ', e);
    }
};
