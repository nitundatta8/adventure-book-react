import * as c from '../actions/ActionsType';



let initialState = {
  isLoading: false,
  userInfo: {},
  error: null,
  login: false,
  authenticationFail: null
}


export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_LOGIN:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        login: true,
        userInfo: action.userInfo
      });
    case c.GET_LOGIN_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
        login: false,
        authenticationFail: true
      });
    default:
      return state;
  }
};

