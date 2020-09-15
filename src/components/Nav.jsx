import React from 'react';
import Logo from '../img/weather.svg'
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-light bg-light shadow-sm p-2 mb-3 bg-white rounded">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top mr-2" alt="" />
            Weather App
        </span>
      </Link>
      <Link className='text-decoration-none text-dark' to='/about'>
        <span className='text-nowrap bd-highlight'>About</span>
      </Link>
        <SearchBar 
          onSearch={onSearch}
        />
        
    </nav>
  );
};

export default Nav;
