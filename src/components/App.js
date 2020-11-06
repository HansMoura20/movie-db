import React from 'react';
import { Router } from '@reach/router';
import Movie from './Movie';
import NotFound from './NotFound';

import Header from './elements/Header.js';
import Home from './Home.js';
import Footer from './elements/Footer';

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
      <Footer/>
      <GlobalStyle/>
    </>
  )
}



export default App;
