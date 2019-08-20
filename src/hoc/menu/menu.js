import React, { Component, Fragment } from 'react';

const menu = WrappedComponent => {
  class Menu extends Component {
    render() {
      return (
        <Fragment>
          <img className="menu-logo" alt="logo" src={ require("../../img/logo.svg") } />
          <WrappedComponent { ...this.props } />
        </Fragment>
      );
    }

  }

  return Menu; 
}

export default menu;