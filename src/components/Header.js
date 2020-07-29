import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header(props) {
  const styleHeader = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '5px',
    backgroundColor: 'gray',
    fontSize: '30px',
    color: 'black',
    width: '100%',
    borderBottom: '5px solid black',
    padding: '1rem'
  }
  const link = {

    color: 'white'
  }



  return (
    <div style={styleHeader}>
      <h3>Adventure Book</h3>
      <Link style={link} to="/signin">Sign In</Link>
      <Link style={link} to="/">Home</Link>
      <Link style={link} to="/newAdventureForm">Share Adventure</Link>
    </div>
  );
}

export default Header;