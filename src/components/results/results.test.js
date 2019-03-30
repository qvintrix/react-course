import React from 'react';
import {shallow} from 'enzyme';
import Results from './results';

describe('Results component', () => {
    it('renders', () => {
        const wrapper = shallow(<Results/>);

        expect(wrapper.exists()).toBe(true);
    });
});
