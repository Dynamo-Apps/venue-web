const initialState = {};

export const UserData = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_DATA':
      return action.payload;
    default:
      return state;
  }
};
