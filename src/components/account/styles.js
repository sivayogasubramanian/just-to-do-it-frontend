import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  const isDarkTheme = theme.palette.type === 'dark';
  return {
    paper: {
      // Grey : Very Light blue
      backgroundColor: isDarkTheme ? '#5a5a5e' : '#ebebff',
    },
    button: {
      margin: '10px',
    },
    form: {
      padding: '20px',
    },
  };
});
