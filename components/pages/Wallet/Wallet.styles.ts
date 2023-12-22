import { Button, styled } from '@mui/material';

export const WalletLayout = styled('div')`
    width: 100%;
    height: 100%;
`;

export const WalletMain = styled('div')`
    display: flex;
    justify-content: center;
    column-gap: 3ch;
    padding: 80px;
`;

export const CustomCopyButton = styled(Button)`
    padding: 0;
    width: 180px;
    height: 46px;
    font-size: 16px;
    margin: 0 auto;
`;
