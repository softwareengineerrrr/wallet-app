import { MouseEvent, useState } from 'react';

import { Alert, AppBar, Divider, IconButton, Menu, MenuItem, Snackbar, Toolbar } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { ContentCopy } from '@mui/icons-material';

import EtherCard from '@ui/common/EtherCard';
import { AppBarIcon } from '@ui/pages/Wallet/icons/AppBarIcon';
import { DynamicSecretPhraseModal } from '@ui/common/SecretPhraseModal';
import { DynamicUpdateBalance } from '@ui/common/UpdateBalance';

import { useAppStore } from '@/providers/AppProvider';
import { useGetWalletBalance } from '@/hooks';
import { useCopyToClipboard } from '@/hooks/utilHooks/useCopyToClipboard';
import { getPrivateKey } from '@/functions/tauri';
import { moveToMain } from '@/routing/routing';

import * as S from './Wallet.styles';

const Wallet = () => {
    const { isAuth, handleAuth } = useAppStore((state) => ({ isAuth: state.isAuth, handleAuth: state.handleAuth }));

    const { balance, publicKey } = useGetWalletBalance();

    const { showSnack, handleCloseSnack, copyToClipboard } = useCopyToClipboard();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [showSecret, setShowSecret] = useState(false);

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCopy = async (item: 'publicKey' | 'privateKey') => {
        if (item === 'privateKey') {
            const privateKey = await getPrivateKey();
            copyToClipboard(privateKey);
        } else {
            publicKey && copyToClipboard(publicKey);
        }
        handleClose();
    };

    const handleLogout = async () => {
        handleAuth(false);
        await moveToMain();
    };

    const toggleModal = () => {
        handleClose();
        setShowSecret((ps) => !ps);
    };

    return (
        <S.WalletLayout>
            <AppBar position="static" elevation={6}>
                <Toolbar sx={{ padding: '0 60px' }}>
                    <IconButton size="large" edge="start" color="inherit">
                        <AppBarIcon />
                    </IconButton>
                    {publicKey && (
                        <S.CustomCopyButton
                            onClick={() => copyToClipboard(publicKey)}
                            aria-label={'copy phrase'}
                            startIcon={<ContentCopy />}
                        >
                            Copy Wallet ID
                        </S.CustomCopyButton>
                    )}
                    {isAuth ? (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={() => handleCopy('publicKey')}>Copy Wallet ID</MenuItem>
                                <MenuItem onClick={() => handleCopy('privateKey')}>Copy Private Key</MenuItem>
                                <MenuItem onClick={toggleModal}>Show secret phrases</MenuItem>
                                <Divider />
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </div>
                    ) : (
                        <div />
                    )}
                </Toolbar>
            </AppBar>
            <S.WalletMain>
                <EtherCard balance={balance} />
                <DynamicUpdateBalance />
            </S.WalletMain>
            {showSnack && (
                <Snackbar open={showSnack} autoHideDuration={4000} onClose={handleCloseSnack}>
                    <Alert severity="success">Wallet ID copied successfully</Alert>
                </Snackbar>
            )}
            {showSecret && <DynamicSecretPhraseModal handleClose={toggleModal} />}
        </S.WalletLayout>
    );
};
export default Wallet;
