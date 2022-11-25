import {combineReducers} from 'redux';
import {isUserLoggedIn} from './isUserLoggedIn';
import {UserData} from './UserData';

const appReducer = combineReducers({
  isUserLoggedIn,
  UserData,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
