import React from 'react';
import { Box, Paper, Typography, Zoom } from '@material-ui/core';
// Styles
import { useStyles } from './styles';

const CardMessage = ({ message }) => {
  const classes = useStyles();
  return (
    <Zoom in={true}>
      <Paper variant="outlined" className={classes.paper}>
        <Box m="10px">
          <Typography variant="h5">{message}</Typography>
        </Box>
      </Paper>
    </Zoom>
  );
};

export default CardMessage;
