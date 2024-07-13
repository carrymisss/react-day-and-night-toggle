import React, { memo, useEffect, useState } from 'react';
import { Circle, Cloud, Cloudpart, Clouds, ContentWrapper, ShootingStar, ShootingStarWrapper, Star, Stars, Switch, SwitchContainer, } from './styles';
export const DayAndNightToggle = memo(({ onChange, checked, size = 32, startInactive = false, animationInactive = true, shadows = true, className = undefined, ...labelProps }) => {
    const [disable, setDisable] = useState(false);
    const [startingInactive, setStartingInactive] = useState(startInactive);
    const roundedSize = Math.floor(size);
    useEffect(() => {
        if (startingInactive) {
            setDisable(true);
            setTimeout(() => {
                setDisable(false);
            }, 2000);
        }
        return setStartingInactive(false);
    }, [checked, startingInactive]);
    const handleClick = () => {
        if (!disable) {
            onChange();
            setDisable(true);
            if (animationInactive) {
                setTimeout(() => {
                    setDisable(false);
                }, 2000);
            }
            else {
                setDisable(false);
            }
        }
    };
    return (<SwitchContainer className={className} size={roundedSize} {...labelProps}>
        <Switch shadows={shadows} size={roundedSize} checked={checked} onClick={handleClick}>
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
      </SwitchContainer>);
});
// DayAndNightToggle.propTypes = {
//     onChange: PropTypes.func.isRequired,
//     checked: PropTypes.bool.isRequired,
//     size: PropTypes.number,
//     startInactive: PropTypes.bool,
//     animationInactive: PropTypes.bool,
//     shadows: PropTypes.bool,
//     className: PropTypes.string,
// }
// DayAndNightToggle.defaultProps = {
//     onChange: () => null,
//     checked: false,
//     size: 32,
//     startInactive: false,
//     animationInactive: true,
//     shadows: true,
//     className: undefined,
// }
