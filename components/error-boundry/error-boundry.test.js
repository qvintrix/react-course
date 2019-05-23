import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundry from './error-boundry';

describe('ErrorBoundry component', () => {
  it('renders', () => {
    const wrapper = shallow(<ErrorBoundry/>);

    expect(wrapper.exists()).toBe(true);
  });
});
