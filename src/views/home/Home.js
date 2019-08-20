import React, { Component, Fragment } from 'react';
import menu from '../../hoc/menu/menu';
import Search from '../../components/search/Search';

class Home extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Fragment>
        <Search />
      </Fragment>
      );
  }
}

export default menu(Home);