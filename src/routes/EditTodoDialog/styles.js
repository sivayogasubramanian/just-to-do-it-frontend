import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  const isDarkTheme = theme.palette.type === 'dark';
  return {
    editIcon: { marginRight: '10px' },
    dialog: {
      background:
        'linear-gradient(330deg, rgba(96,100,222,1) 30%, rgba(216,255,0,1) 100%, rgba(51,69,98,1) 100%)',
    },
    addBtn: {
      marginTop: '10px',
    },
    buttons: {
      color: isDarkTheme ? 'lightBlue' : 'blue',
    },
    loader: {
      color: isDarkTheme ? '#b0bcff' : '#0027ff',
    },
  };
});
