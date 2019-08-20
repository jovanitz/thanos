import React, { PureComponent } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { API } from '../../helpers/apis';
import menu from '../../hoc/menu/menu';
import Search from '../../components/search/Search';
import { params, mapStateToProps, mapDispatchToProps, renderMovies } from './home-data';

class Home extends PureComponent {
  
  state = {
    loading: true,
    movies: [],
  }

  async componentDidMount() {
    const { setMoviesState } = this.props;
    const res = await axios.get(`${ API }/list${ params }`).then(resp => resp.data.response.groups).catch(e => new Error(e));
    !(res instanceof Error)
      ? this.setState({ loading: false, movies: renderMovies(res)}, () => setMoviesState(res))
      : alert(res);
  }

  handleFilterMovies = (name) => {
    const { movies } = this.props;
    const newMovies = movies.filter(movie => movie.title.toLowerCase().includes(name));
    this.setState({ movies: renderMovies(newMovies) });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="home-content">
        <Search callback={ this.handleFilterMovies }/>
        <div className="home-movies">
            { movies }
          </div>
      </div>
      );
  }
}

export default menu(connect(mapStateToProps, mapDispatchToProps)(Home));