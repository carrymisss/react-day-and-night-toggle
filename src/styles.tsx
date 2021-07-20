import styled, { css } from 'styled-components'
import {
    growbrighter,
    startravel1,
    startravel2,
    startravel3,
    shootingstartravel,
    growtrail,
    cloudtravel1,
    cloudtravel2,
    cloudtravel3,
} from './animations'


interface ISwitchContainer {
    readonly size: number
}

interface ISwitch extends ISwitchContainer {
    readonly checked: boolean,
    readonly shadows: boolean
}

export const SwitchContainer = styled.div<ISwitchContainer>`
    position: relative;
    height: ${props => props.size % 2 === 1 ? props.size + .1 : props.size}px;
    width: ${props => (props.size * 2.5) % 2 === 1 ? (props.size * 2.5) + 1 : props.size * 2.5}px;
`

export const Switch: any = styled.div<ISwitch>`
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    width: 300px;
    height: 120px;
    left: 50%;
    top: 50%;
    border-radius: 70px;
    border: 5px solid ${props => props.checked ? 'rgb(40, 40, 51)' : 'rgb(211, 239, 255)'};
    background-color: ${props => props.checked ? 'rgb(23, 23, 35)' : 'rgb(186, 230, 255)'};
    transition: border-color 1500ms, background-color 1500ms, box-shadow 1500ms;
    ${props => props.shadows && `box-shadow: 0 0 35px 1px ${props.checked ? '#E0E0E0' : '#616161'};`}
    transform: translate(-50%, -50%) scale(${props => props.size * 0.00832});
    ${props => props.checked && css`
        ${Circle} {
            width: 100px;
            height: 100px;
            left: 100%;
            transform: translate(-100%, -50%);
            background-color: rgb(237, 242, 241);
            box-shadow: 0 0 20px 3px rgb(244, 247, 246);
            &::before, &::after {
                opacity: 1;
                transition: opacity 2s 0.2s;
            }
        }
        ${Star} {
            opacity: 1;
            transition: opacity 2s 1.5s;
        }
        ${Stars} {
            & ${Star} {
                &:nth-of-type(1) {
                    animation: ${css`${startravel1} 15s linear infinite`};
                    animation-delay: 0.4s;
                }
                &:nth-of-type(2) {
                    animation: ${css`${startravel2} 12s linear infinite`};
                    animation-delay: 0.2s;
                }
                &:nth-of-type(3) {
                    animation: ${css`${startravel3} 18s linear infinite`};
                    animation-delay: 0s;
                }
            }
        }
        ${ShootingStarWrapper} {
            opacity: 1;
            transition: opacity 0s 2s;
            animation: ${css`${shootingstartravel} 24s linear infinite`};
            animation-delay: 6s;
        }
        ${ShootingStar} {
            &::after {
                animation: ${css`${growtrail} 24s linear infinite`};
                animation-delay: 6s;
            }
        }
        ${Cloud} {
            opacity: 0;
            transition: opacity 1s 0s;
            &:nth-of-type(1), &:nth-of-type(2), &:nth-of-type(3) {
                animation: none;
            }
        }
    `}
`

export const ContentWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 60px;
    -webkit-border-radius: 60px;
    overflow: hidden;
    z-index: 2;
`

export const Circle = styled.div`
    position: absolute;
    width: 70px;
    height: 70px;
    left: 0%;
    top: 50%;
    transform: translate(0%, -50%);
    border-radius: 50%;
    background-color: rgb(255, 233, 183);
    box-shadow: 0 0 20px 10px rgb(255, 233, 183), 0 0 40px 30px rgb(255, 219, 140), 0 0 90px 50px rgb(255, 209, 109);
    transition: left 2s, transform 2s, width 2s, height 2s, box-shadow 2s, background-color 2s 0.2s;
    z-index: 1;

    &::before, &::after {
        content: "";
        position: absolute;
        border-radius: 50%;
        opacity: 0;
        transition: opacity 0s;
    }

    &::before {
        left: 13%;
        top: 30%;
        width: 12px;
        height: 20px;
        background-color: rgb(183, 188, 187);
        box-shadow: 0 0 4px 1px rgb(183, 188, 187), 0 0 10px 6px rgb(192, 198, 197);
    }

    &::after {
        left: 60%;
        top: 75%;
        width: 12px;
        height: 12px;
        background-color: rgb(183, 188, 187);
        box-shadow: 0 0 3px 1px rgb(183, 188, 187), 0 0 5px 4px rgb(192, 198, 197);
    }
`

export const Stars = styled.div``

export const Star = styled.div`
    position: absolute;
    width: 6px;
    height: 6px;
    left: 80%;
    top: 50%;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 0 5px 0px rgb(255, 255, 255);
    animation: none;
    opacity: 0;

    &::before, &::after {
        content: "";
        position: absolute;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: white;
        box-shadow: 0 0 4px 0px rgb(255, 255, 255);
        animation: ${css`${growbrighter} 1s linear alternate infinite`};
        left: 50%;
        top: 50%;
    }

    &::before {
        width: 20px;
        height: 1px;
    }

    &::after {
        width: 1px;
        height: 20px;
    }
`

export const ShootingStarWrapper = styled.div`
    position: absolute;
    transform: translate(200px, -30px) rotate(-30deg);
    opacity: 0;
`

export const ShootingStar = styled.div`
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    left: 20%;
    top: 50%;
    background: radial-gradient(rgba(255, 231, 193, 0.9) 30%, rgba(237, 155, 61, 1));
    box-shadow: -5px 0 20px 2px rgba(237, 155, 61, 0.7), 0 0 15px 5px rgba(237, 155, 61, 0.5);

    &::after {
        content: "";
        position: absolute;
        width: 160px;
        height: 15px;
        border-top-right-radius: 70%;
        border-bottom-right-radius: 70%;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        top: 50%;
        transform: translate(0, -50%);
        background: radial-gradient(rgba(255, 231, 193, 0.9) 1%, rgba(237, 155, 61, 0.9));
        box-shadow: 10px 0 10px 1px rgba(237, 155, 61, 0.5), 0px 3px 15px 5px rgba(237, 155, 61, 0.5), 0px -3px 15px 5px rgba(237, 155, 61, 0.5);
        z-index: -1;
    }
`

export const Cloudpart = styled.div``
export const Clouds = styled.div``

export const Cloud = styled.div`
    &:nth-of-type(1), &:nth-of-type(2), &:nth-of-type(3) {
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(rgb(255, 255, 255) 30%, rgb(230, 230, 230));
        z-index: 2;
        opacity: 1;
        transition: opacity 2s 0.4s;
        &::before, &::after {
            content: "";
            position: absolute;
            border-radius: 50%;
            background: inherit;
            z-index: 3;
        }
        & ${Cloudpart}:nth-of-type(1), & ${Cloudpart}:nth-of-type(2) {
            content: "";
            position: absolute;
            border-radius: 50%;
            background: inherit;
            z-index: 2;
            bottom: 0%;
            &::after, &::before {
                content: "";
                position: absolute;
                border-radius: 50%;
                background: inherit;
                z-index: 3;
                top: 50%;
            }
        }
    }
    &:nth-of-type(1) {
        width: 50px;
        height: 55px;
        left: -80px;
        top: 5px;
        animation: ${css`${cloudtravel1} 22s linear infinite`};
        animation-delay: 5.4s;
        &::before {
            width: 30px;
            height: 20px;
            left: -55%;
            top: 70%;
            transform: translate(100%, 0%);
        }
        &::after {
            width: 40px;
            height: 30px;
            left: 100%;
            top: 50%;
            transform: translate(-70%, 0%);
        }
        & ${Cloudpart}:nth-of-type(1) {
            width: 60px;
            height: 45px;
            left: -100%;
            transform: translate(40%, 0%);
            &::after {
                width: 55px;
                height: 35px;
                left: 50%;
                transform: translate(-35%, -50%);
            }
        }
        & ${Cloudpart}:nth-of-type(2) {
            width: 40px;
            height: 40px;
            left: 100%;
            transform: translate(-50%, 0%);
            &::before {
                width: 45px;
                height: 40px;
                left: -50%;
                transform: translate(20%, -70%);
            }
        }
    }
    &:nth-of-type(2) {
        width: 55px;
        height: 50px;
        left: -90px;
        top: 26px;
        animation: ${css`${cloudtravel2} 18s linear infinite`};
        animation-delay: 1.2s;
        &::before {
            width: 30px;
            height: 20px;
            left: -55%;
            top: 70%;
            transform: translate(100%, -30%);
        }
        &::after {
            width: 40px;
            height: 30px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -40%);
        }
        & ${Cloudpart}:nth-of-type(1) {
            width: 55px;
            height: 45px;
            left: -100%;
            transform: translate(50%, 0%);
            &::after {
                width: 55px;
                height: 30px;
                left: 50%;
                transform: translate(-35%, -20%);
            }
        }
        & ${Cloudpart}:nth-of-type(2) {
            width: 50px;
            height: 40px;
            left: 100%;
            transform: translate(-50%, 0%);
            &::before {
                width: 50px;
                height: 35px;
                left: -50%;
                transform: translate(10%, -40%);
            }
        }
    }
    &:nth-of-type(3) {
        width: 50px;
        height: 40px;
        left: -100px;
        top: 48px;
        animation: ${css`${cloudtravel3} 30s linear infinite`};
        animation-delay: 8.6s;
        &::before {
            width: 40px;
            height: 30px;
            left: -50%;
            top: 50%;
            transform: translate(25%, -30%);
        }
        &::after {
            width: 40px;
            height: 25px;
            left: 50%;
            top: 50%;
            transform: translate(5%, -60%);
        }
        & ${Cloudpart}::nth-of-type(1) {
            width: 45px;
            height: 35px;
            left: -50%;
            top: 50%;
            transform: translate(0%, -40%);
            &::before {
                width: 30px;
                height: 20px;
                left: -30%;
                top: 50%;
                transform: translate(0%, -60%);
            }
            &::after {
                width: 20px;
                height: 15px;
                left: 0%;
                top: 50%;
                transform: translate(0%, 10%);
            }
        }
        & ${Cloudpart}::nth-of-type(2) {
            width: 50px;
            height: 45px;
            left: 50%;
            top: 50%;
            transform: translate(10%, -20%);
            &::before {
                width: 35px;
                height: 25px;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
            &::after {
                width: 35px;
                height: 25px;
                left: 60%;
                top: 50%;
                transform: translate(0%, -40%);
            }
        }
        & ${Cloudpart}::nth-of-type(3) {
            width: 55px;
            height: 40px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -10%);
            &::before {
                width: 40px;
                height: 25px;
                left: -50%;
                top: 50%;
                transform: translate(40%, -30%);
            }
        }
    }
`