import React, { PureComponent } from 'react';
import axios from 'axios';
import { API } from '../../helpers/apis';
import { getParams } from './movie-data';

class Movie extends PureComponent {
  async componentDidMount() {
    const { setMovieState, match = {} } = this.props;
    const { params = {} } = match;
    const { id } = params;

    const res = await axios.get(`${ API }/data${ getParams(id) }`).then(resp => resp.data.response.group.common).catch(e => new Error(e));
    if(!(res instanceof Error)) setMovieState(res);
  }

  render() {
    const { currentMovie } = this.props;
    const { title, image_background, image_large, description } = currentMovie;
    const renderMovie = (
      <div className="movie">
        <img className="movie__bg" src={ image_background } alt="img_bg" />
        <div><img className="movie__img" src={ image_large } alt="img_bg" /></div>
        <div className="movie-resume">
          <h1>{ title }</h1>
          <p>{ description }</p>
        </div>
      </div>
    );

    return (
      <div className="movie-content">
        { renderMovie }
      </div>
      );
  }
}

export default Movie;