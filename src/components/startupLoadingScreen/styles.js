import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loader: {
    textAlign: 'center',
    background:
      'linear-gradient(330deg, rgba(96,100,222,1) 30%, rgba(216,255,0,1) 100%, rgba(51,69,98,1) 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
  },
}));

export default useStyles;
