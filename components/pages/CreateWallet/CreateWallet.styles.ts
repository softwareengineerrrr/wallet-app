import { styled, Box, Typography } from '@mui/material';

export const CWLayout = styled(Box)`
    width: 100%;
    height: 100%;
`;

export const CWLayoutBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: calc(680px + 1ch);
    row-gap: 20px;
    margin: 0 auto;
    padding: 4svh;
`;

export const CWTitle = styled(Typography)`
    color: ${({ theme }) => theme.palette.grey[800]};
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 10px;
`;

export const CWButtonBlock = styled('div')`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 60px);
    margin: 0 auto;
    padding-bottom: 80px;
`;
