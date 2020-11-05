import React from 'react';

import Header from './elements/Header.js';
import Home from './Home.js';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  return(
    <>
      <Header/>
      <Home/>
      <GlobalStyle/>
    </>
  )
}



export default App;
