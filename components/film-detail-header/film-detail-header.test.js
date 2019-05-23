import React from 'react';
import { shallow } from 'enzyme';
import FilmDetailHeader from './film-detail-header';

describe('FilmDetailHeader component', () => {
  it('renders', () => {
    const wrapper = shallow(<FilmDetailHeader/>);

    expect(wrapper.exists()).toBe(true);
  });
});
