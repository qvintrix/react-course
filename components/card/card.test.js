import React from 'react';
import {shallow} from 'enzyme';
import Card from './card';

describe('Card component', () => {
    it('renders', () => {
        const wrapper = shallow(<Card/>);

        expect(wrapper.exists()).toBe(true);
    })
});
