import { connect } from 'react-redux';
import { setMovies } from '../../state/actions';
import Home from './Home';

export const mapStateToProps = state => {
  const { movies } = state;
  return { movies };
}

export const mapDispatchToProps = dispatch => ({
  setMoviesState: movies => dispatch(setMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);