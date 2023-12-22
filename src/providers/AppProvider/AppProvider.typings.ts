import { PaletteMode } from '@mui/material';

import { UserEntity } from '@typings/model';
import { NUL } from '@typings/common';

/**
 * Global App states
 * @param mode --> theme mode ${@link PaletteMode}
 */
export type AppState = {
    mode: PaletteMode;
    user: UserEntity;
    isAuth: boolean;
    balance: NUL<string>;
    publicKey: NUL<string>;
    timestamp: string;
};

/**
 * Global App actions
 * toggleTheme --> theme handler
 */
export type AppAction = {
    toggleTheme: (mode?: AppState['mode']) => void;
    updateUser: (newUser: UserEntity) => void;
    handleAuth: (value?: boolean) => void;
    updateBalance: (newBalance: NUL<string>) => void;
    updatePublicKey: (newPublicKey: NUL<string>) => void;
};
