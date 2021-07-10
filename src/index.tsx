import React, { useState, useEffect, memo } from 'react'
import {
    Switch,
    SwitchContainer,
    ContentWrapper,
    Circle,
    Star,
    Stars,
    ShootingStar,
    ShootingStarWrapper,
    Cloud,
    Clouds,
    Cloudpart
} from './styles'


interface IProps {
    onChange: () => void,
    checked: boolean,
    size?: number,
    startInactive?: boolean,
    animationInactive?: boolean,
    shadows?: boolean,
    className?: string | undefined,
    [props: string]: any
}

const DayAndNightToggler = ({
    onChange,
    checked,
    size = 32,
    startInactive = false,
    animationInactive = true,
    shadows = true,
    className = undefined,
    ...labelProps
}: IProps) => {
    const [disable, setDisable] = useState(false)
    const [startingInactive, setStartingInactive] = useState(startInactive)

    const roundedSize: number = Math.floor(size)

    useEffect(() => {
        if (startingInactive) {
            setDisable(true)
            setTimeout(() => {
                setDisable(false)
            }, 2000)
        }
        return setStartingInactive(false)
    }, [checked, startingInactive])

    return (
        <SwitchContainer className={className} size={roundedSize} {...labelProps}>
            <Switch shadows={shadows} size={roundedSize} checked={checked}
                onClick={
                    !disable
                        ? () => {
                            onChange()
                            setDisable(true)
                            if (animationInactive) {
                                setTimeout(() => {
                                    setDisable(false)
                                }, 2000)
                            } else {
                                setDisable(false)
                            }
                        }
                        : null
                }>
                <ContentWrapper>
                    <Circle />
                    <Stars>
                        <Star />
                        <Star />
                        <Star />
                        <ShootingStarWrapper>
                            <ShootingStar />
                        </ShootingStarWrapper>
                    </Stars>
                    <Clouds>
                        <Cloud>
                            <Cloudpart />
                            <Cloudpart />
                        </Cloud>
                        <Cloud>
                            <Cloudpart />
                            <Cloudpart />
                        </Cloud>
                        <Cloud>
                            <Cloudpart />
                            <Cloudpart />
                            <Cloudpart />
                        </Cloud>
                    </Clouds>
                </ContentWrapper>
            </Switch>
        </SwitchContainer>
    )
}

const propsAreEqual = (prevProps: IProps, nextProps: IProps) =>
    prevProps.checked === nextProps.checked &&
    prevProps.size === nextProps.size &&
    prevProps.startInactive === nextProps.startInactive &&
    prevProps.animationInactive === nextProps.animationInactive &&
    prevProps.shadows === nextProps.shadows &&
    prevProps.className === nextProps.className

export default memo(DayAndNightToggler, propsAreEqual)