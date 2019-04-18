import React from 'react';
import {mount, shallow} from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
// import {MemoryRouter} from 'react-router-dom';
import CardList from './card-list';
import Card from "../card";

describe('CardList component', () => {
    it('renders', () => {
        const wrapper = shallow(<CardList/>);

        expect(wrapper.exists()).toBe(true);
    });

    it('renders Card component', () => {
        const films = [{ label: 'Kill Bill, vol 1' }];
        // const wrapper = shallow(<CardList films={films}/>);

        const wrapper = shallow(
            <Router>
                <CardList films={films}/>
            </Router>
        );
        expect(wrapper.find(Card).length).toEqual(0);
    });
});
