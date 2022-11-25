const initialState = false;

export const isUserLoggedIn = (state = initialState, action) => {
  
  switch (action.type) {
    case 'GET_USER_LOGIN_STATUS':
      return action.payload;
    default:
      return state;
  }
};
