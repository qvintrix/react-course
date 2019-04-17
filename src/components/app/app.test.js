import React from 'react';
import {shallow} from 'enzyme';
import App from './app';

describe('App component', () => {
    it('renders', () => {
        const wrapper = shallow(<App/>);

        expect(wrapper.exists()).toBe(true);
    });
});
