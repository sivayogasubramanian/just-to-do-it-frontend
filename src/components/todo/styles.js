import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  card: {
    marginTop: '10px',
  },
  cardInComplete: {
    // Beige
    backgroundColor: '#e2ffde',
  },
  cardCompleted: {
    // Light Green
    backgroundColor: 'lightGreen',
  },
  grid: {
    marginTop: '10px',
    marginBottom: '5px',
  },
});
