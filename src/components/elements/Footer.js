import React from 'react';

import { StyledFooter } from '../styles/StyledFooter';
import { currentYear } from '../../helpers';

const Footer = () => {
  return (
    <StyledFooter>
    <div className="footer-content">
      <h1 className="react-logo">React Movie</h1>
      <div className="statement">
        <p>Inspired by <span>Thomas Weibenfalk</span></p>
        <p>Developed by <span>Hans Moura 	&copy; {currentYear()}</span></p>
        <p>API from <span>The Movie DB</span></p>
      </div>
      
    </div>
      
    </StyledFooter>
  )
}

export default Footer;
