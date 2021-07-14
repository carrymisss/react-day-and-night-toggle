import React from 'react'
import renderer from 'react-test-renderer'
import DayAndNightToggler from '../src/index'


describe('Test of component <DayAndNightToggler>:', () => {
    let theme: boolean
    let changeTheme: jest.Mock
    let component: renderer.ReactTestRenderer

    beforeEach(() => {
        theme = false
        changeTheme = jest.fn(() => theme = !theme)
        renderer.act(() => {
            component = renderer.create(<DayAndNightToggler checked={theme} onChange={changeTheme} />)
        })
    })
    
    test('should render:', () => {
        expect(component.toJSON()).toMatchSnapshot()
    })
    test('should have all the necessary props:', () => { 
        expect(component.root.props).toEqual({ checked: theme, onChange: changeTheme })
        expect(changeTheme).toHaveBeenCalled
    })
    test('should all props be passed:', () => {
        renderer.act(() => {
            component.update(
                <DayAndNightToggler
                    checked={theme}
                    onChange={changeTheme}
                    size={24}
                    startInactive={true}
                    animationInactive={true}
                    shadows={true}
                    className={'class_name'}
                />
            )
        })
        expect(component.toJSON()).toMatchSnapshot()
        expect(component.root.props).toEqual({
            checked: theme,
            onChange: changeTheme,
            size: 24,
            startInactive: true,
            animationInactive: true,
            shadows: true,
            className: 'class_name'
        })
        expect(changeTheme).toHaveBeenCalled
    })
})
