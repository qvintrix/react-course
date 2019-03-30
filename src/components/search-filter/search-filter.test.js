import React from 'react';
import {shallow} from 'enzyme';
import SearchFilter from './search-filter';

describe('SearchFilter component', () => {
    it('renders', () => {
        const wrapper = shallow(<SearchFilter/>);

        expect(wrapper.exists()).toBe(true);
    });

    it('when the form is submitted the event is cancelled', () => {
        const wrapper = shallow(<SearchFilter/>);

        let prevented = false;
        wrapper.find('form').simulate('submit', {
            preventDefault: () => prevented = true
        });

        expect(prevented).toBe(true);
    })
});
