import React from 'react';
import {mount, shallow} from 'enzyme';
import CardList from './card-list';
import Card from "../card";

describe('CardList component', () => {
    it('renders', () => {
        const wrapper = shallow(<CardList/>);

        expect(wrapper.exists()).toBe(true);
    });

    it('renders Card component', () => {
        const films = [{ label: 'Kill Bill, vol 1' }];
        const wrapper = mount(<CardList films={films}/>);

        expect(wrapper.find(Card).length).toEqual(1);
    });
});
