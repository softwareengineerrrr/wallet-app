import { styled } from '@mui/material';

import { AvenirNextFont } from '@/config/localFonts';

export const EtherCardLayout = styled('div')`
    .card {
        width: 195px;
        height: 285px;
        background: #313131;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        transition: 0.2s ease-in-out;
        transform: scale(1);
    }

    .img {
        position: absolute;
        transition: 0.2s ease-in-out;
        z-index: 1;
        height: 65%;
        filter: blur(7px);
        animation: anim 3s infinite;
    }

    .textBox {
        opacity: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        transition: 0.2s ease-in-out;
        z-index: 2;
    }

    .textBox > .text {
        font-weight: bold;
    }

    .textBox > .head {
        font-size: 20px;
    }

    .textBox > .price {
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        font-family: ${AvenirNextFont.style.fontFamily};
    }

    .textBox > span {
        font-size: 12px;
        color: lightgrey;
    }

    @keyframes anim {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-20px);
        }

        100% {
            transform: translateY(0);
        }
    }
`;
