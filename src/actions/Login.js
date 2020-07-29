import * as c from './ActionsType';


export const requestLogin = () => ({
  type: c.REQUEST_LOGIN
});

export const getLoginSuccess = (user) => ({
  type: c.GET_LOGIN_SUCCESS,
  userInfo: user
});
export const getLoginFailure = (error) => ({
  type: c.GET_LOGIN_FAILURE,
  error
});

export const login = (usename, password) => {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "username": usename, "password": password })
  };

  return dispatch => {
    dispatch(requestLogin);

    return fetch('http://localhost:5000/Users/authenticate', requestOptions)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          console.log("jsonifiedResponse.results ");
          console.log(jsonifiedResponse);
          if (jsonifiedResponse.token != null) {
            console.log("Login success ");

            dispatch(getLoginSuccess(jsonifiedResponse));
          } else {
            console.log("Login fail ");
            dispatch(getLoginFailure({ error: "Wrong user/password" }));
          }



        })
      .catch((error) => {
        dispatch(getLoginFailure(error));
      });
  }
};
