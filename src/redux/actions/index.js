export const isUserLoggedIn = (user) => ({
  type: 'GET_USER_LOGIN_STATUS',
  payload: user,
});

export const logout = () => ({
  type: 'USER_LOGOUT',
});

export const UserData = (userData) => ({
  type: 'USER_DATA',
  payload: userData,
});
