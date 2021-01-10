import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: '10px',
    backgroundColor: '#e2ffde',
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
}));
