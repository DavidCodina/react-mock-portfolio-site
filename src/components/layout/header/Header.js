import React      from 'react';
import Navigation from '../navigation/Navigation';
import linksArray from '../../../data/link-data.js'
import './Header.css';

//brandUrl was brandUrl="/", but this doesn't work in github.
//Thus: https://davidcodina.github.io/mock-portfolio-site/#/
const Header = () => {
  return (
    <header className="header header-gradient">
      <Navigation
        brandTitle="DavTek Industries"
        brandUrl="/"
        linksArray={linksArray}
      />
    </header>
  );
}


export default Header;
