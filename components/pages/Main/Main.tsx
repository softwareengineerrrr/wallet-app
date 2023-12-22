import { Button } from '@mui/material';

import AppIcon from '@ui/common/AppIcon';

import { moveToCreateWallet } from '@/routing/routing';

import * as S from './Main.styles';

const Main = () => {
    const handleCreateWallet = async (): Promise<void> => {
        await moveToCreateWallet();
    };

    return (
        <S.MainLayout>
            <AppIcon />
            <S.MainButtonBlock>
                <Button variant={'contained'} onClick={handleCreateWallet} aria-label={'create wallet'}>
                    Create new wallet
                </Button>
                <Button disabled aria-label={'import exciting wallet'}>
                    Import exciting wallet
                </Button>
            </S.MainButtonBlock>
        </S.MainLayout>
    );
};
export default Main;
