import React, { Component } from 'react';

const menu = WrappedComponent => {
  class Menu extends Component {
    render() {
      return (
        <div className="menu">
          <img className="menu-logo" alt="logo" src={ require("../../img/logo.svg") } />
          <WrappedComponent { ...this.props } />
        </div>
      );
    }

  }

  return Menu; 
}

export default menu;