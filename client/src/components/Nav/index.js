import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
          <div className='navigation'>
              <h3><Link to='/orderHistory'>Order History</Link></h3>
              <h3><a href='/' onClick={() => Auth.logout()}>Logout</a></h3>
          </div>
      );
    } else {
      return (
        <div className='navigation'>
          <h3><Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></h3>
          <h3><Link to='/signup'>Signup</Link></h3>      
        </div>
      );
    }
  }

  return (
      <header>
        <h1>
          <Link className='title' to='/'>Fire In The Hole</Link>
        </h1>
        <nav>{showNavigation()}</nav>
      </header>
  ); 
}

export default Nav;
