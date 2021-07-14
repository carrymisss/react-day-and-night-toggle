import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
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
} from '../src/styles'


describe('Test of \'styled-components\' components:', () => {
    let testSize: number = 32
    let testShadow: boolean = true

    test('should <SwitchContainer> render:', () => {
        let component = renderer.create(<SwitchContainer size={testSize} />)
        expect(component.toJSON()).toMatchSnapshot()
        expect(component.root.props.size).toEqual(testSize)
    })
    test('should <Switch> render:', () => {
        let component = renderer.create(<Switch size={testSize} shadow={testShadow} />)
        expect(component.toJSON()).toMatchSnapshot()
        expect(component.root.props).toEqual({ size: testSize, shadow: testShadow })
    })
    test('should <ContentWrapper> render:', () => {
        let component = renderer.create(<ContentWrapper />)
        expect(component.toJSON()).toMatchSnapshot()
    })
    test('should <Circle> render:', () => {
        let component = renderer.create(<Circle />)
        expect(component.toJSON()).toMatchSnapshot()
    })
    test('should <Star> render:', () => {
        let component = renderer.create(<Star />)
        expect(component.toJSON()).toMatchSnapshot()
    })
    test('should <Stars> render:', () => {
        let component = renderer.create(<Stars />)
        expect(component.toJSON()).toMatchSnapshot()
    })
    test('should <ShootingStar> render:', () => {
        let component = renderer.create(<ShootingStar />)
        expect(component.toJSON()).toMatchSnapshot()
    })
    test('should <ShootingStarWrapper> render:', () => {
        let component = renderer.create(<ShootingStarWrapper />)
        expect(component.toJSON()).toMatchSnapshot()
    })
    test('should <Cloud> render:', () => {
        let component = renderer.create(<Cloud />)
        expect(component.toJSON()).toMatchSnapshot()
    })
    test('should <Clouds> render:', () => {
        let component = renderer.create(<Clouds />)
        expect(component.toJSON()).toMatchSnapshot()
    })
    test('should <Cloudpart> render:', () => {
        let component = renderer.create(<Cloudpart />)
        expect(component.toJSON()).toMatchSnapshot()
    })

})
