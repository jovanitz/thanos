import { connect } from 'react-redux';
import Movie from './Movie';
import { setCurrentMovie } from '../../state/actions';

export const mapStateToProps = state => {
  const { currentMovie } = state;
  return { currentMovie };
}

export const mapDispatchToProps = dispatch => ({
  setMovieState: movie => dispatch(setCurrentMovie(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);