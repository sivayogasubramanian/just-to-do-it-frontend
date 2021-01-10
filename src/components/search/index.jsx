// React and helpers
import React, { useState } from 'react';
// MUI Components
import { Card, Grid, Slide, TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from 'material-ui-search-bar';
// MUI Icons

// Styles
import { useStyles } from './styles';

const Search = () => {
  const classes = useStyles();

  return (
    <>
      <Slide
        direction="left"
        in={true}
        mountOnEnter
        timeout={{ enter: 300, exit: 500 }}
      >
        <Grid
          container
          direction="row-reverse"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Card variant="outlined" className={classes.card}>
              <SearchBar value={'test'} />
            </Card>
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.formControl}>
              <InputLabel>Filter</InputLabel>
              <Select defaultValue={10}>
                <MenuItem value={10}>By title</MenuItem>
                <MenuItem value={20}>By tags</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Slide>
    </>
  );
};

export default Search;
