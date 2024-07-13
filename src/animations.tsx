import { keyframes } from 'styled-components';

export const growbrighter = keyframes`
    0% {
        box-shadow: 0 0 4px 0px rgb(255, 255, 255);
    }
    100% {
        box-shadow: 0 0 15px 0px rgb(255, 255, 255);
    }
`;

export const startravel1 = keyframes`
    0% {
        transform: rotate(65deg) translate(-80px) scale(1.0);
    }
    100% {
        transform: rotate(-60deg) translate(-80px) scale(1.3);
    }
`;

export const startravel2 = keyframes`
    0% {
        transform: rotate(27deg) translate(-160px) scale(1.6);
    }
    100% {
        transform: rotate(-25deg) translate(-160px) scale(1.2);
    }
`;

export const startravel3 = keyframes`
    0% {
        transform: rotate(22deg) translate(-200px) scale(1.2);
    }
    100% {
        transform: rotate(-20deg) translate(-200px) scale(0.7);
    }
`;
export const shootingstartravel = keyframes`
    0% {
        transform: translate(200px, -30px) rotate(-30deg);
    }
    8.33% {
        transform: translate(-180px, 170px) rotate(-30deg);
    }
    100% {
        transform: translate(-180px, 170px) rotate(-30deg);
    }
`;

export const growtrail = keyframes`
    0% {
        width: 40px;
    }
    8.33% {
        width: 180px;
    }
    100% {
        width: 180px;
    }
`;

export const cloudtravel1 = keyframes`
    0% {
        left: -80px;
        transform: scale(1);
    }
    100% {
        left: 330px;
        transform: scale(0.8);
    }
`;

export const cloudtravel2 = keyframes`
    0% {
        left: -90px;
        transform: scale(0.6);
    }
    100% {
        left: 330px;
        transform: scale(1);
    }
`;

export const cloudtravel3 = keyframes`
    0% {
        left: -100px;
        transform: scale(0.7);
    }
    100% {
        left: 340px;
        transform: scale(0.65);
    }
`;
