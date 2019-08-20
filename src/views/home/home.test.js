import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Home from './Home';

const movies = [
  { image_large: 'name', title: 'title', id: 'id' },
  { image_large: 'name', title: 'title', id: 'id' },
  { image_large: 'name', title: 'title', id: 'id' },
];

describe('src/views/movie/Movie.js', () => {
  it('should render current movie', () => {
    const wrapper = shallow(<Home movies={ movies } />);
    console.log(wrapper.debug());

    expect(wrapper.find('.home-movies').length).to.equals(1);
  })
})