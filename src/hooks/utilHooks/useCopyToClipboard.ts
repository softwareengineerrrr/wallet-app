import { useState } from 'react';

import { canUseDOM } from '@/utils/browserUtils';

export const useCopyToClipboard = () => {
    const [showSnack, setShowSnack] = useState(false);

    const copyToClipboard = (stringToCopy: string) => {
        if (canUseDOM) {
            setShowSnack(true);
            navigator.clipboard.writeText(stringToCopy);
        }
    };

    const handleCloseSnack = () => {
        setShowSnack(false);
    };

    return {
        showSnack,
        copyToClipboard,
        handleCloseSnack,
    };
};
