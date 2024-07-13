import React from 'react';
import renderer from 'react-test-renderer';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { DayAndNightToggle } from '../src/index';

describe('Test of component <DayAndNightToggle>:', () => {
  let theme: boolean;
  let changeTheme: ReturnType<typeof vi.fn>;
  let component: renderer.ReactTestRenderer;

  beforeEach(() => {
    theme = false;
    changeTheme = vi.fn(() => (theme = !theme));
    renderer.act(() => {
      component = renderer.create(<DayAndNightToggle checked={theme} onChange={changeTheme} />);
    });
  });

  test('should render:', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
  test('should have all the necessary props:', () => {
    expect(component.root.props).toEqual({ checked: theme, onChange: changeTheme });
    expect(changeTheme).toHaveBeenCalled;
  });
  test('should all props be passed:', () => {
    renderer.act(() => {
      component.update(
        <DayAndNightToggle
          checked={theme}
          onChange={changeTheme}
          size={24}
          startInactive={true}
          animationInactive={true}
          shadows={true}
          className={'class_name'}
        />,
      );
    });
    expect(component.toJSON()).toMatchSnapshot();
    expect(component.root.props).toEqual({
      checked: theme,
      onChange: changeTheme,
      size: 24,
      startInactive: true,
      animationInactive: true,
      shadows: true,
      className: 'class_name',
    });
    expect(changeTheme).toHaveBeenCalled;
  });
});
