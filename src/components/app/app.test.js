import React from 'react';
import {shallow} from 'enzyme';
import App from './app';

describe('App component', () => {
    it('renders', () => {
        const wrapper = shallow(<App/>);

        expect(wrapper.exists()).toBe(true);
    })

    it("updates the sortBy when clicked by onSortedBy func", () => {
        const wrapper = shallow(<App/>);
        wrapper.instance().onSortedBy("rating");
        wrapper.update();

        expect(wrapper.state('sortBy')).toEqual("rating");
    });

    it("updates the searchByFilter when clicked by onSearchBy func", () => {
        const wrapper = shallow(<App/>);
        wrapper.instance().onSearchBy("GENRE");
        wrapper.update();

        expect(wrapper.state('searchByFilter')).toEqual("GENRE");
    });
});
