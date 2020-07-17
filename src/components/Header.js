import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header(props) {
  //not working
  const StyleHeader = styled.section`
    display: flex,
    margin: 5px,
    backgroundColor: #06155c,
    fontSize: '30px',
    color: 'ivory',
    width: '100%',
    borderBottom: 5px solid black
  `;

  const NavBar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
  `;

  const NavItem = styled.li`
  float: right;
  a {
    display: block;
    color: blue;
    padding: 14px 16px;
    text-align: center;
    text-decoration: none;
  }

  a:hover {
    color: Black;
    background-color: pink;
  }
`;

  const NavName = styled.h1`
  color: light green;
  float: left;
  position: fixed;
  top: 0;
  margin-left: 14px;
`;


  return (
    <React.Fragment>
      <StyleHeader>

        <NavName>Adventure Book</NavName>
        <NavBar>
          <NavItem>
            <Link to='/signin'>Sign In</Link>
          </NavItem>
          <NavItem>
            <Link to='/contact'> Contact</Link>
          </NavItem>
          <NavItem>
            <Link to='/link1' >Link1</Link>
          </NavItem>
          <NavItem>
            <Link to='/#about'>About</Link>
          </NavItem>
        </NavBar>

      </StyleHeader>

    </React.Fragment>
  );
}

export default Header;