import { useEffect, useState } from 'react';

import { useAppStore } from '@/providers/AppProvider';
import { generateSecurePhrase, handleIsTauri } from '@/functions/tauri';

export const useGenerateSecurePhrase = () => {
    const { user } = useAppStore((state) => ({ user: state.user }));

    /**
     * Put security phrase into local state
     * Do not use global state for security reasons
     */
    const [securePhrase, setSecurePhrase] = useState<string[]>(Array.from(Array(12)));

    /**
     * Fetch security phrase on initial render
     */
    useEffect(() => {
        (async (): Promise<void> => {
            try {
                if (!handleIsTauri()) {
                    /**
                     * TODO: handle this case for web-browser
                     * can use bip39 library for front part
                     * @see https://github.com/tauri-apps/tauri/issues/6486#issuecomment-1476039883
                     */

                    alert('You are not inside app');
                    return;
                }
                const response = await generateSecurePhrase(user);

                const phrase = response[1]?.split(' ')?.slice(0, 12);

                setSecurePhrase(phrase);
            } catch (e: any) {
                console.error('[Generate secure phrase error]: ', e?.message ?? e);
            }
        })();
    }, []);

    return { securePhrase };
};
