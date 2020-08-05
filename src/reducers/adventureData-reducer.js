import * as c from '../actions/ActionsType';



let initialState = {
  advrntureInfo: [],
  error: null,

}


export default (state = initialState, action) => {
  switch (action.type) {

    case c.ADD_ADVENTURE:
      return Object.assign({}, state, {
        advrntureInfo: action.data
      });
    case c.ADD_ADVENTURE_FAILURE:
      return Object.assign({}, state, {

        error: action.error,

      });
    default:
      return state;
  }
};

