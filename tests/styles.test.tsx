import Adapter from '@cfaester/enzyme-adapter-react-18';
import type { ShallowWrapper } from 'enzyme';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import { describe, expect, test } from 'vitest';

import {
  Circle,
  Cloud,
  Cloudpart,
  Clouds,
  ContentWrapper,
  ShootingStar,
  ShootingStarWrapper,
  Star,
  Stars,
  Switch,
  SwitchContainer,
} from '../src/styles';

Enzyme.configure({ adapter: new Adapter() });

describe("Test of 'styled-components' components:", () => {
  let testSize: number = 32;
  let wrapper: ShallowWrapper<{ className: string; size: number; shadow?: boolean; }>;
  let testShadow: boolean = true;

  test('should <SwitchContainer> render:', () => {
    wrapper = shallow(<SwitchContainer size={testSize} />);
    expect(wrapper).toMatchSnapshot();
    expect((wrapper.props()).size).toEqual(testSize);
  });
  test('should <Switch> render:', () => {
    wrapper = shallow(<Switch size={testSize} shadow={testShadow} />);
    expect(wrapper).toMatchSnapshot();
    const { size, shadow } = wrapper.props();
    expect({ size, shadow }).toEqual({ size: testSize, shadow: testShadow });
  });
  test('should <ContentWrapper> render:', () => {
    wrapper = shallow(<ContentWrapper />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should <Circle> render:', () => {
    wrapper = shallow(<Circle />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should <Star> render:', () => {
    wrapper = shallow(<Star />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should <Stars> render:', () => {
    wrapper = shallow(<Stars />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should <ShootingStar> render:', () => {
    wrapper = shallow(<ShootingStar />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should <ShootingStarWrapper> render:', () => {
    wrapper = shallow(<ShootingStarWrapper />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should <Cloud> render:', () => {
    wrapper = shallow(<Cloud />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should <Clouds> render:', () => {
    wrapper = shallow(<Clouds />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should <Cloudpart> render:', () => {
    wrapper = shallow(<Cloudpart />);
    expect(wrapper).toMatchSnapshot();
  });
});
