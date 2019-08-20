import React from 'react';
import { v4 } from 'uuid';
import { setMovies } from '../../state/actions';

export const params = '?filter_id=13182&order_id=50&order_way=ASC&level_id=GPS&from=0&quantity=50&region=mexico&api_version=v5.87&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_so=chrome&device_manufacturer=generic&HKS=c18rh8lr6b5cvmtk26ikcj88k4';

export const mapStateToProps = state => {
  const { movies } = state;
  return { movies };
}

export const mapDispatchToProps = dispatch => ({
  setMoviesState: movies => dispatch(setMovies(movies))
});

export const renderMovies = movies => movies.map(movie => {
  const { image_large, title, id } = movie;

  return (
    <a key={ v4() } href={ `/detalles/${ id }` }>
      <img src={ image_large } alt={ title } />
    </a>
  );
})