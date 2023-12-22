import { Button, styled, Typography } from '@mui/material';

export const UBTitle = styled(Typography)`
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const UBTime = styled(Typography)`
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 10px 0 24px;
`;

export const RefreshButton = styled(Button)`
    svg {
        animation: spin-animation 1s;
        animation-timing-function: linear;
        display: inline-block;
    }

    @keyframes spin-animation {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;
