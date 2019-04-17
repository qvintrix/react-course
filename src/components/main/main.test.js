import React from 'react';
import {shallow} from 'enzyme';
import Main from './main';

describe('Main component', () => {
    it('renders', () => {
        const wrapper = shallow(<Main/>);

        expect(wrapper.exists()).toBe(true);
    })

    it("updates the sortBy when clicked by onSortedBy func", () => {
        const wrapper = shallow(<Main/>);
        wrapper.instance().onSortedBy("rating");
        wrapper.update();

        expect(wrapper.state('sortBy')).toEqual("rating");
    });

    it("updates the searchByFilter when clicked by onSearchBy func", () => {
        const wrapper = shallow(<Main/>);
        wrapper.instance().onSearchBy("GENRE");
        wrapper.update();

        expect(wrapper.state('searchByFilter')).toEqual("GENRE");
    });
});
