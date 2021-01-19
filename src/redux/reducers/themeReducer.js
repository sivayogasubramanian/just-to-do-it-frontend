// Actions
import { SET_THEME_LIGHT, SET_THEME_DARK } from '../actionTypes';

const themeReducer = (state = 'light', action) => {
  switch (action.type) {
    case SET_THEME_LIGHT:
      return 'light';
    case SET_THEME_DARK:
      return 'dark';
    default:
      return state;
  }
};

export default themeReducer;
