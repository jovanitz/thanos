import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './state/store';
import Home from './views/home/HomeContainer';
import Movie from './views/movie/MovieContainer';
import menu from './hoc/menu/menu';
import './app.scss';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ menu(Home) } />
          <Route exact path="/detalles/:id" component={ menu(Movie) } />
          <Redirect from="/" to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
