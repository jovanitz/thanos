import { handleActions } from 'redux-actions';
import { setMovies, setCurrentMovie } from './actions';

const initialState = {
  movies: [],
  currentMovie: {},
};

export default handleActions({
  [setMovies]: (state, action) => ({ ...state, movies: action.payload }),
  [setCurrentMovie]: (state, action) => ({ ...state, currentMovie: action.payload }),
}, initialState); 