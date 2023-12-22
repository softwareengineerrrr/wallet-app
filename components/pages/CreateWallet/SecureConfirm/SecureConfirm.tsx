import { Box, Button } from '@mui/material';

import { useSecureConfirm } from '@ui/pages/CreateWallet/SecureConfirm/SecureConfirm.hooks';

import * as S from '../SecurePhrase/SecurePhrase.styles';
import { CWButtonBlock } from '../CreateWallet.styles';

const SecureConfirm = ({ handleDecreaseStep }: { handleDecreaseStep: () => void }) => {
    const { securePhrase, handleChangeConfirmPhrase, confirmPhrase, accConfirmValidation } = useSecureConfirm();

    return (
        <>
            <S.SPLayout>
                <S.SPTitle>Security confirmation</S.SPTitle>
                <S.SPSubTitle>Recover your secret phrases</S.SPSubTitle>
                <S.SecureWords>
                    {confirmPhrase?.map((word, idx) => (
                        <Box key={securePhrase[idx]} sx={{ h: '46px' }}>
                            {!word.isDisabled ? (
                                <S.CustomInput
                                    label={idx + 1}
                                    value={word?.value}
                                    error={word?.isError ?? false}
                                    size="small"
                                    inputProps={{ 'aria-label': 'secure confirm phrase' }}
                                    onChange={(e) => handleChangeConfirmPhrase(word?.wordNumber, e.target.value)}
                                />
                            ) : (
                                <S.CustomInput
                                    id="outlined-read-only-input"
                                    label={idx + 1}
                                    defaultValue={word.value}
                                    size="small"
                                    inputProps={{ 'aria-label': 'secure phrase' }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        </Box>
                    ))}
                </S.SecureWords>
            </S.SPLayout>
            <CWButtonBlock>
                <Button onClick={handleDecreaseStep} aria-label={'go back'}>
                    Go back
                </Button>
                <Button
                    onClick={accConfirmValidation}
                    aria-label={'next step'}
                    variant={'contained'}
                    sx={{ padding: '10px 36px' }}
                >
                    Next
                </Button>
            </CWButtonBlock>
        </>
    );
};
export default SecureConfirm;
