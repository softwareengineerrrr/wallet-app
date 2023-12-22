import { useEffect, useState } from 'react';

import { ConfirmPhraseType } from '@ui/pages/CreateWallet/CreateWallet.typings';

import { getSecurePhrase, handleIsTauri } from '@/functions/tauri';
import { moveToWallet } from '@/routing/routing';
import { useAppStore } from '@/providers/AppProvider';

const getRandomIndex = (excludeIndexes: number[]) => {
    const availableIndexes = [];
    for (let i = 0; i < 12; i++) {
        if (!excludeIndexes.includes(i)) {
            availableIndexes.push(i);
        }
    }
    const randomIndex = Math.floor(Math.random() * availableIndexes.length);
    return availableIndexes[randomIndex];
};

export const useSecureConfirm = () => {
    const { handleAuth } = useAppStore((state) => ({ handleAuth: state.handleAuth }));
    /**
     * Put security phrase into local state
     * Do not use global state for security reasons
     */
    const [securePhrase, setSecurePhrase] = useState<string[]>(Array.from(Array(12)));
    const [confirmPhrase, setConfirmPhrase] = useState<ConfirmPhraseType[]>(
        new Array(12).fill({ wordNumber: 0, value: '', error: false, isDisabled: true }),
    );

    const handleChangeConfirmPhrase = (wordNumber: number, value: string) => {
        setConfirmPhrase((prevState) => {
            return prevState.map((obj) => {
                if (obj.wordNumber === wordNumber) {
                    return { ...obj, value: value };
                }
                return obj;
            });
        });
    };

    /**
     * Step 3 validator
     */
    const accConfirmValidation = () => {
        let isValid = true;

        const newPhrase = confirmPhrase.map((item) => {
            if (!item.isDisabled) {
                if (securePhrase[item.wordNumber] !== item.value) {
                    isValid = false;
                    return {
                        ...item,
                        isError: true,
                    };
                } else {
                    return {
                        ...item,
                        isError: false,
                    };
                }
            }
            return item;
        });
        setConfirmPhrase(newPhrase);

        if (isValid) {
            handleAuth(true);
            moveToWallet();
        }
    };

    /**
     * Fetch security phrase on initial render
     */
    useEffect(() => {
        (async (): Promise<void> => {
            try {
                if (handleIsTauri()) {
                    const response: string = await getSecurePhrase();

                    const phrase = response?.split(' ')?.slice(0, 12);

                    /**
                     * Replace 4 random fields with '' values
                     */
                    const indexesToReplace: number[] = [];
                    while (indexesToReplace.length < 4) {
                        const randomIndex = getRandomIndex(indexesToReplace);
                        indexesToReplace.push(randomIndex);
                    }

                    const modifiedStrings = phrase.map((string, index) => {
                        return {
                            wordNumber: index,
                            isError: false,
                            value: indexesToReplace.includes(index) ? '' : string,
                            isDisabled: !indexesToReplace.includes(index),
                        };
                    });

                    setSecurePhrase(phrase);
                    setConfirmPhrase(modifiedStrings);
                }
            } catch (e: any) {
                console.error('[Generate secure phrase error]: ', e?.message ?? e);
            }
        })();
    }, []);

    return { securePhrase, confirmPhrase, handleChangeConfirmPhrase, accConfirmValidation };
};
