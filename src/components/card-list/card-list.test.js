import React from 'react';
import {shallow} from 'enzyme';
import CardList from './card-list';

describe('CardList component', () => {
    it('renders', () => {
        const wrapper = shallow(<CardList/>);

        expect(wrapper.exists()).toBe(true);
    })
});
