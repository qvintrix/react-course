import React from 'react';
import { shallow } from 'enzyme';
import AppFooter from './app-footer';

describe('AppFooter component', () => {
  it('renders', () => {
    const wrapper = shallow(<AppFooter/>);

    expect(wrapper.exists()).toBe(true);
  });
});
