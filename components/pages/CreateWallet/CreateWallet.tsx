import { JSX } from 'react';

import { Button } from '@mui/material';

import SignInForm from '@ui/pages/CreateWallet/SignInForm';
import * as S from '@ui/pages/CreateWallet/CreateWallet.styles';
import AppIcon from '@ui/common/AppIcon';
import StepLine from '@ui/common/StepLine';
import SecurePhrase from '@ui/pages/CreateWallet/SecurePhrase';

import { moveBack } from '@/routing/routing';

import { useHandleCreateWallet } from './CreateWallet.hooks';
import SecureConfirm from './SecureConfirm';

const CreateWallet = () => {
    const {
        activeStep,
        signInFormValues,
        errorFields,
        handleChangeSignInValue,
        handleNextButtonClick,
        handleDecreaseStep,
        userAgreement,
        setAgree,
    } = useHandleCreateWallet();

    const renderStep = (): JSX.Element => {
        switch (activeStep) {
            case 0:
                return (
                    <SignInForm
                        formValues={signInFormValues}
                        handleChangeSignInValue={handleChangeSignInValue}
                        errorFields={errorFields}
                    />
                );

            case 1:
                return <SecurePhrase userAgreement={userAgreement} setAgree={setAgree} errorFields={errorFields} />;
            case 2:
                return <SecureConfirm handleDecreaseStep={handleDecreaseStep} />;
            default:
                return <div />;
        }
    };

    return (
        <S.CWLayout>
            <S.CWLayoutBox>
                <AppIcon />
                <S.CWTitle>Create a new wallet</S.CWTitle>
                <StepLine activeStep={activeStep} />
                {renderStep()}
                {activeStep !== 2 && (
                    <S.CWButtonBlock>
                        <Button
                            onClick={() => (activeStep === 0 ? moveBack() : handleDecreaseStep())}
                            aria-label={'go back'}
                        >
                            Go back
                        </Button>
                        <Button
                            onClick={handleNextButtonClick}
                            aria-label={'next step'}
                            disabled={activeStep === 2}
                            variant={'contained'}
                            sx={{ padding: '10px 36px' }}
                        >
                            Next
                        </Button>
                    </S.CWButtonBlock>
                )}
            </S.CWLayoutBox>
        </S.CWLayout>
    );
};
export default CreateWallet;
