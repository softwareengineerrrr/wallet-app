import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { NUL } from '@typings/common';

export interface ChangeSignInFormType {
    type: 'username' | 'password' | 'confirmPassword';
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
}

export interface SignInFormValuesType {
    username: string;
    password: string;
    confirmPassword: string;
}

export interface SignInFormType {
    formValues: SignInFormValuesType;
    handleChangeSignInValue: (props: ChangeSignInFormType) => void;
    errorFields: NUL<string>[];
}

export interface SecurePhraseFormType {
    userAgreement: boolean;
    setAgree: Dispatch<SetStateAction<boolean>>;
    errorFields: NUL<string>[];
}

export interface ConfirmPhraseType {
    wordNumber: number;
    value: string;
    isError: boolean;
    isDisabled: boolean;
}
