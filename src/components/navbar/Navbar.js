import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import './Navbar.css';

const Navbar =() =>{
    return (
      <>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
        </nav>
        <Outlet />
      </>
    );
  }
  
  export default Navbar;