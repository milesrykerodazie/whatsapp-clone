/** @format */

/* This is how the data layer looks before anything happens to it ,
in a nuts shell its original state as a user not being logged in */
export const initialState = {
  user: null,
};
// these are certain actions that push information into the data layer
//for example when a user is signed in this action will push the user into the data layer to
//carry out an action
export const actionTypes = {
  SET_USER: "SET_USER",
};

//When an action is sent out(dispatched) it looks(listens) at
//the dispatched info and returns how we intend
//to change the datalayer but does not tamper with information already in the state
function reducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    //if anyother thing just go back to the way things were before
    default:
      return state;
  }
}

export default reducer;
