import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header(props) {
  const styleHeader = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: '5px',
    backgroundColor: 'gray',
    fontSize: '30px',

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
      <Link style={link} to="/signin"><h4>Sign In</h4></Link>
      <Link style={link} to="/"><h4>Home</h4></Link>
      <Link style={link} to="/newAdventureForm"><h4>Share Adventure</h4></Link>
    </div>
  );
}

export default Header;