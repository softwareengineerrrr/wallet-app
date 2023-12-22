import { Box, Button, styled, TextField, Typography } from '@mui/material';

import { AvenirNextFont } from '@/config/localFonts';

export const SPLayout = styled('div')`
    width: 100%;
    height: auto;
`;

export const SPTitle = styled(Typography)`
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;
    margin: 6ch auto 1ch;
`;

export const SPSubTitle = styled(Typography)`
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    max-width: 676px;
`;

export const SecureWords = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 28px;
    margin: 32px auto;
`;

export const CustomButton = styled(Button)`
    font-size: 19px;
    width: 180px;
    height: 46px;
    justify-content: flex-start;
    white-space: nowrap;
    padding: 0;

    svg {
        margin-right: 6px;
    }
`;

export const FilledInput = styled('div')`
    border-radius: 4px;
    background: #161616;
    width: 180px;
    height: 46px;
`;

export const CustomInput = styled(TextField)`
    width: 180px;
    height: 46px;

    input {
        border-radius: 4px;
        height: 46px;
        width: 100%;
        padding: 0 10px;
    }
`;

export const SWCardWrapper = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 80px auto 20px;

    div {
        display: flex;
        min-width: 280px;
        max-width: 300px;
        padding: 32px;
        align-items: center;
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.08);
        flex: 1 0 100px;
        color: rgba(255, 255, 255, 0.8);
        font-family: ${AvenirNextFont.style.fontFamily};
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;

        svg {
            width: 48px;
            height: 48px;
            margin-right: 24px;
        }
    }
`;
