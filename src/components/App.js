import React from 'react';
import { Router } from '@reach/router';
import Movie from './Movie';
import NotFound from './NotFound';

import Header from './elements/Header.js';
import Home from './Home.js';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  return(
    <>
      <Header/>
      <Router>
        <Home path="/"/>
        <Movie path="/:movieId" />
        <NotFound default />
      </Router>
      <GlobalStyle/>
    </>
  )
}



export default App;
