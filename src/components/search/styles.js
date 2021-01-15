import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    padding: '10px',
    backgroundColor: '#d2fcf5',
  },
  grid: {
    marginTop: '10px',
    marginBottom: '5px',
  },
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    minWidth: 90,
  },
  autoComplete: { backgroundColor: 'white' },
}));
