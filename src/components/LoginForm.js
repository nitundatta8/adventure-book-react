import React from 'react';
//import { useHistory } from 'react-router-dom';
import { login } from '../actions/Login';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router';

import { Redirect } from 'react-router-dom';



function LoginForm() {
  const dispatch = useDispatch();
  //const history = useHistory();
  const loginStatus = useSelector(state => state.user.login);
  const authenticationFail = useSelector(state => state.user.authenticationFail);


  return (

    <React.Fragment>
      {loginStatus ? <Redirect to={`/`} /> : <h3></h3>}

      {authenticationFail ? <h3>Login Fail {authenticationFail}</h3> : <h3></h3>}
      <h1>Sign in</h1>
      <form onSubmit={doSignUp}>
        <label>Try with Test User Name book</label>
        <br />
        <input
          type='text'
          name='text'
          placeholder='User Name' /><br />
        <label>Try with Test Password book</label><br />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <br /> <br />
        <button type='submit'>Sign in</button>
      </form >



    </React.Fragment >
  );


  function doSignUp(event) {
    event.preventDefault();
    console.log("Name : " + event.target.name.value);

    dispatch(login(event.target.text.value, event.target.password.value));

  };

};
export default LoginForm;