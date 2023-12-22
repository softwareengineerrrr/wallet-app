import { ChangeEvent, useState } from 'react';

import { Alert, Box, Button, Checkbox, FormControlLabel, Snackbar } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { SecurePhraseData } from '@ui/pages/CreateWallet/SecurePhrase/SecurePhrase.data';
import { SecurePhraseFormType } from '@ui/pages/CreateWallet/CreateWallet.typings';

import { useCopyToClipboard } from '@/hooks/utilHooks/useCopyToClipboard';

import { useGenerateSecurePhrase } from './SecurePhrase.hooks';
import * as S from './SecurePhrase.styles';

const SecurePhrase = ({ userAgreement, setAgree, errorFields }: SecurePhraseFormType) => {
    const { securePhrase } = useGenerateSecurePhrase();

    const [showPhrase, setShowPhrase] = useState(false);

    const { showSnack, handleCloseSnack, copyToClipboard } = useCopyToClipboard();

    const toggleWords = () => {
        setShowPhrase((prevState) => !prevState);
    };

    const handleAgree = (event: ChangeEvent<HTMLInputElement>) => {
        setAgree(event.target.checked);
    };

    return (
        <S.SPLayout>
            <S.SPTitle>Your mnemonics is ready</S.SPTitle>
            <S.SPSubTitle>
                Please make sure nobody is looking and keep a copy of your secret phrases. They are not restored and if
                they are lost, access to the wallet will be lost.
            </S.SPSubTitle>
            <S.SecureWords>
                {securePhrase.map((word, idx) => (
                    <Box key={idx} sx={{ h: '46px' }}>
                        {showPhrase ? (
                            <S.CustomInput
                                id="outlined-read-only-input"
                                label={idx + 1}
                                defaultValue={word}
                                size="small"
                                inputProps={{ 'aria-label': 'secure phrase' }}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        ) : (
                            <S.FilledInput />
                        )}
                    </Box>
                ))}
            </S.SecureWords>
            <S.SecureWords>
                <Box sx={{ width: '180px', height: '46px' }} />
                <S.CustomButton
                    size="small"
                    startIcon={showPhrase ? <VisibilityOff /> : <Visibility />}
                    aria-label={'show phrase'}
                    onClick={toggleWords}
                >
                    {showPhrase ? 'Hide mnemonics' : 'Show mnemonics'}
                </S.CustomButton>
                {showPhrase ? (
                    <Button
                        onClick={() => copyToClipboard(securePhrase.join(' '))}
                        aria-label={'copy phrase'}
                        variant={'contained'}
                        sx={{ padding: '0', width: '180px', height: '46px' }}
                    >
                        Copy phrases
                    </Button>
                ) : (
                    <Box sx={{ width: '180px', height: '46px' }} />
                )}
            </S.SecureWords>
            <S.SWCardWrapper>
                {SecurePhraseData.map((card, idx) => (
                    <div key={idx}>
                        {card.icon}
                        {card.text}
                    </div>
                ))}
            </S.SWCardWrapper>
            <FormControlLabel
                required
                sx={{ padding: '2ch', color: errorFields[0] === null || userAgreement ? '' : '#EB3A3E' }}
                control={
                    <Checkbox
                        value={!userAgreement}
                        onChange={handleAgree}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="I’ve saved the secret phrases and understand that if I lose them I’ll not be able to access my wallet."
            />

            {showSnack && (
                <Snackbar open={showSnack} autoHideDuration={4000} onClose={handleCloseSnack}>
                    <Alert severity="success">Secure phrase copied successfully</Alert>
                </Snackbar>
            )}
        </S.SPLayout>
    );
};
export default SecurePhrase;
