import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  bgColor: {
    background:
      'linear-gradient(330deg, rgba(96,100,222,1) 30%, rgba(216,255,0,1) 100%, rgba(51,69,98,1) 100%)',
  },
  responsive: { maxWidth: '100%', height: 'auto' },
  loader: { marginTop: '5px', marginBottom: '20px' },
});
