import React from 'react';
import { shallow } from 'enzyme';
import Layout from './layout';

describe('Layout component', () => {
  it('renders', () => {
    const wrapper = shallow(<Layout/>);

    expect(wrapper.exists()).toBe(true);
  });
});
