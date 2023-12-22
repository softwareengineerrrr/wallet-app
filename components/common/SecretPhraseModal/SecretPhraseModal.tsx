import { useEffect, useState } from 'react';

import { Box, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import * as P from '@ui/pages/CreateWallet/SecurePhrase/SecurePhrase.styles';
import { SecurePhraseData } from '@ui/pages/CreateWallet/SecurePhrase/SecurePhrase.data';

import { getSecurePhrase } from '@/functions/tauri';

import * as S from './SecretPhraseModal.styles';

const SecretPhraseModal = ({ handleClose }: { handleClose: () => void }) => {
    const [securePhrase, setSecurePhrase] = useState<string[]>(Array.from(Array(12)));

    useEffect(() => {
        (async () => {
            const response: string = await getSecurePhrase();

            const phrase = response?.split(' ')?.slice(0, 12);

            setSecurePhrase(phrase);
        })();
    }, []);

    return (
        <S.Layout>
            <Dialog open={true} onClose={handleClose} maxWidth={'tabletSmall'}>
                <DialogTitle sx={{ m: 0, textAlign: 'center' }}>Secret phrases</DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    <P.SecureWords>
                        {securePhrase?.map((word, idx) => (
                            <Box key={word} sx={{ h: '46px' }}>
                                <P.CustomInput
                                    id="outlined-read-only-input"
                                    label={idx + 1}
                                    defaultValue={word}
                                    size="small"
                                    inputProps={{ 'aria-label': 'secure phrase' }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Box>
                        ))}
                    </P.SecureWords>
                    <P.SWCardWrapper>
                        {SecurePhraseData.map((card, idx) => (
                            <div key={idx}>
                                {card.icon}
                                {card.text}
                            </div>
                        ))}
                    </P.SWCardWrapper>
                </DialogContent>
            </Dialog>
        </S.Layout>
    );
};

export default SecretPhraseModal;
