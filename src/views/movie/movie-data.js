import { setCurrentMovie } from '../../state/actions';

export const getParams = id => `?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.87&region=mexico&HKS=c18rh8lr6b5cvmtk26ikcj88k4&group_id=${ id }`;

export const mapStateToProps = state => {
  const { currentMovie } = state;
  return { currentMovie };
}

export const mapDispatchToProps = dispatch => ({
  setMovieState: movie => dispatch(setCurrentMovie(movie))
});