import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Movie from './Movie';

const currentMovie = {
  title: 'name film',
  image_background: '/url',
  image_large: '/url',
  description: 'description',
};

describe('src/views/movie/Movie.js', () => {
  it('should render current movie', () => {
    const wrapper = shallow(<Movie currentMovie={ currentMovie } />);

    expect(wrapper.find(".movie").length).to.equals(1);
  })
})
