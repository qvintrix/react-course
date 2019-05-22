import React from 'react';
import {shallow} from 'enzyme';
import AppHeader from './app-header';

describe('AppHeader component', () => {
    it('renders', () => {
        const wrapper = shallow(<AppHeader/>);

        expect(wrapper.exists()).toBe(true);
    })
});
