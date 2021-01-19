import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  const isDarkTheme = theme.palette.type === 'dark';
  return {
    card: {
      marginTop: '10px',
    },
    cardInComplete: {
      // Very Dark Blue : Very light Blue
      backgroundColor: isDarkTheme ? '#22266e' : 'lightBlue',
    },
    cardCompleted: {
      // Very Dark Green : Very light Green
      backgroundColor: isDarkTheme ? '#2c611c' : 'lightGreen',
    },
    grid: {
      marginTop: '10px',
      marginBottom: '5px',
    },
  };
});
