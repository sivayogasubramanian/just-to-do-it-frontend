// Actions
import { SET_THEME_LIGHT, SET_THEME_DARK } from '../actionTypes';

export const setTheme = (theme) => {
  if (theme === 'light') {
    return {
      type: SET_THEME_LIGHT,
    };
  } else if (theme === 'dark') {
    return {
      type: SET_THEME_DARK,
    };
  }
};
