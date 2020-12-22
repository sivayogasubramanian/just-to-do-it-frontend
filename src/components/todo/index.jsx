import React from 'react';
import { Card, Checkbox, TextField, Grid, Button } from '@material-ui/core';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';
import { useStyles } from './styles';

const Todo = ({ title, completed }) => {
  const classes = useStyles();
  return (
    <Card raised className={classes.card}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-center"
        className={classes.grid}
      >
        <Grid item xs={2}>
          <Checkbox color="primary" checked={completed} />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth id="standard-basic" value={title} />
        </Grid>
        <Grid item xs={2}>
          <Button>
            <EditTwoToneIcon />
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button>
            <DeleteOutlineTwoToneIcon />
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Todo;
