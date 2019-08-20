import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './state/store';
import Home from './views/home/Home';
import Movie from './views/movie/Movie';
import './app.scss';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/detalles/:id" component={ Movie } />
          <Redirect from="/" to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
