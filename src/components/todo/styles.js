import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
  overdue: {
    // Light Red
    backgroundColor: '#ffbaba',
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
}));

export const textFieldInputProps = {
  style: { textAlign: 'center' },
};
