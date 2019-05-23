import React from 'react';
import { shallow } from 'enzyme';
import ErrorIndicator from './error-indicator';

describe('ErrorIndicator component', () => {
  it('renders', () => {
    const wrapper = shallow(<ErrorIndicator/>);

    expect(wrapper.exists()).toBe(true);
  });
});
