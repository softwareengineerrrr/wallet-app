import { Refresh } from '@mui/icons-material';

import { useAppStore } from '@/providers/AppProvider';
import { getEthBalance } from '@/functions/ethers';

import * as S from './UpdateBalance.styles';

const UpdateBalance = () => {
    const { timestamp, updateBalance } = useAppStore((state) => ({
        timestamp: state.timestamp,
        updateBalance: state.updateBalance,
    }));

    const fetchBalance = async () => {
        const { balance: coins } = await getEthBalance();
        updateBalance(coins);
    };

    return (
        <div>
            <S.UBTitle>Last update:</S.UBTitle>
            <S.UBTime>{timestamp}</S.UBTime>
            <S.RefreshButton
                size="small"
                startIcon={<Refresh />}
                sx={{ m: 0, p: 0, fontSize: '16px' }}
                key={timestamp}
                onClick={fetchBalance}
            >
                Refresh
            </S.RefreshButton>
        </div>
    );
};

export default UpdateBalance;
