import { useState } from 'react';

import { NUL } from '@typings/common';

import { ChangeSignInFormType, SignInFormValuesType } from '@ui/pages/CreateWallet/CreateWallet.typings';
import { ErrorMessages } from '@ui/pages/CreateWallet/CreateWallet.constants';

import { isValidInput } from '@/validators/validators';
import { useAppStore } from '@/providers/AppProvider';

/**
 * CreateWallet state handler
 */
export const useHandleCreateWallet = () => {
    const { updateUser } = useAppStore((state) => ({ updateUser: state.updateUser }));

    const [activeStep, setActiveStep] = useState(0);

    /**
     * Step 1 fields
     */
    const [signInFormValues, setSignInFormValues] = useState<SignInFormValuesType>({
        username: '',
        password: '',
        confirmPassword: '',
    });

    /**
     * Step 2 checkbox
     */
    const [userAgreement, setAgree] = useState(false);

    /**
     * Possible filed errors
     */
    const [errorFields, setErrorFields] = useState<Array<NUL<string>>>([null, null, null, null]);

    /**
     * If next step is available
     */
    const handleNextButtonClick = () => {
        const isStepValid: boolean =
            activeStep === 0 ? signInValidations() : activeStep === 1 ? userAgreementValidation() : false;

        if (isStepValid) {
            setActiveStep((prevState) => prevState + 1);
        }
    };

    /**
     * Step 1 validations
     * @return boolean
     */
    const signInValidations = (): boolean => {
        let errors: Array<NUL<string>> = [null, null, null];

        /**
         * All fields more than 5 symbols
         */
        Object.values(signInFormValues).map((value, idx) => {
            if (value.length < 5) {
                errors[idx] = ErrorMessages.Min5;
            }
        });

        /**
         * password & confirmPassword are equal
         */
        if (signInFormValues.password !== signInFormValues.confirmPassword) {
            errors[2] = ErrorMessages.PasswordIncorrect;
        }

        /**
         * Put errors to state
         */
        setErrorFields(errors);

        /**
         * If one element in errors got value --> validation failed
         */

        const isValid = errors.every((element) => element === null);

        if (isValid) {
            setErrorFields([null, null, null, null]);
            updateUser({ username: signInFormValues.username?.trim(), password: signInFormValues.password?.trim() });
            return true;
        }

        return false;
    };

    /**
     * Step 2 validator
     */
    const userAgreementValidation = () => {
        let error: Array<NUL<string>> = [null];

        if (!userAgreement) {
            setErrorFields((prevState) => ({ ...prevState, 0: ErrorMessages.AgreeFirst }));
        }

        if (userAgreement && error[0] === null) {
            setErrorFields([null, null, null, null]);
            return true;
        }
        return false;
    };

    const handleDecreaseStep = () => {
        setErrorFields([null, null, null, null]);
        setActiveStep((prevState) => prevState - 1);
    };

    const handleChangeSignInValue = ({ type, event }: ChangeSignInFormType) => {
        if (isValidInput(event.target.value)) {
            setSignInFormValues((prevState) => ({ ...prevState, [type]: event.target.value }));
        }
    };

    return {
        activeStep,
        signInFormValues,
        errorFields,
        handleChangeSignInValue,
        handleNextButtonClick,
        handleDecreaseStep,
        userAgreement,
        setAgree,
    };
};
