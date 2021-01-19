import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  const isDarkTheme = theme.palette.type === 'dark';
  return {
    paper: {
      backgroundColor: isDarkTheme ? '#5a5a5e' : theme.palette.background.paper,
    },
    button: {
      margin: '10px',
    },
    form: {
      padding: '20px',
    },
  };
});
