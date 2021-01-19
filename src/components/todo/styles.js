import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  const isDarkTheme = theme.palette.type === 'dark';
  return {
    card: {
      marginTop: '10px',
    },
    cardInComplete: {
      // Dark Grey : Beige
      backgroundColor: isDarkTheme ? '#3d3d38' : '#e2ffde',
    },
    cardCompleted: {
      // Dark Green : Light Green
      backgroundColor: isDarkTheme ? '#085e00' : 'lightGreen',
    },
    overdue: {
      // Dark Red : Light Red
      backgroundColor: isDarkTheme ? '#5e0016' : '#ffbaba',
    },
    grid: {
      marginTop: '10px',
      marginBottom: '5px',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  };
});

export const textFieldInputProps = {
  style: { textAlign: 'center' },
};
