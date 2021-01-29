// React and helpers
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// Actions
import {
  searchTitle,
  searchTags,
  searchDate,
  cancelSearch,
  setSearchView,
} from '../../redux/actions/searchActions';
// MUI Components
import { Button, Card, Grid, Paper, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SearchBar from 'material-ui-search-bar';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';
// Date Utils
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
// Styles
import { useStyles } from './styles';

const Search = ({
  todos,
  tags,
  title,
  currentView,
  setSearchView,
  searchTitle,
  searchTags,
  setDate,
  from,
  to,
  cancelSearch,
}) => {
  const classes = useStyles();

  const allTagsSet = new Set();
  todos.map((todo) =>
    todo.attributes.tags.forEach((tag) => {
      allTagsSet.add(tag);
    })
  );
  const allTags = [...allTagsSet];

  const handleSelection = (e) => {
    cancelSearch();
    setSearchView(e.target.value);
  };
  const handleSearchChange = (e) => {
    searchTitle(e);
  };
  const handleCancelSearch = () => cancelSearch();
  const handleAutocompleteChange = (event, values) => {
    if (values.length !== 0) {
      searchTags(values);
    } else {
      cancelSearch();
    }
  };
  const [fromDate, setFromDate] = useState(
    from === '' ? new Date() : new Date(from)
  );
  const [toDate, setToDate] = useState(to === '' ? new Date() : new Date(to));

  const handleFromDateChange = (date) => setFromDate(date);
  const handleToDateChange = (date) => setToDate(date);

  useEffect(() => {
    setDate(fromDate, toDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromDate, toDate]);

  const searchInput = () => {
    switch (currentView) {
      case 10:
        return (
          <Card variant="outlined">
            <SearchBar
              value={title}
              onChange={handleSearchChange}
              onCancelSearch={handleCancelSearch}
            />
          </Card>
        );
      case 20:
        return (
          <Autocomplete
            multiple
            freeSolo
            autoComplete
            defaultValue={tags}
            value={tags}
            options={allTags}
            getOptionLabel={(option) => option}
            onChange={handleAutocompleteChange}
            filterSelectedOptions
            className={classes.autoComplete}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" placeholder="Add Tag" />
            )}
          />
        );
      case 30:
        return (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={6}>
                <KeyboardDatePicker
                  fullWidth
                  margin="normal"
                  label="From (date)"
                  format="dd/MM/yyyy"
                  value={fromDate}
                  onChange={handleFromDateChange}
                  disablePast
                />
              </Grid>
              <Grid item xs={6}>
                <KeyboardTimePicker
                  fullWidth
                  margin="normal"
                  label="From (time)"
                  value={fromDate}
                  onChange={handleFromDateChange}
                />
              </Grid>
              <Grid item xs={6}>
                <KeyboardDatePicker
                  fullWidth
                  margin="normal"
                  label="To (date)"
                  format="dd/MM/yyyy"
                  value={toDate}
                  onChange={handleToDateChange}
                  disablePast
                />
              </Grid>
              <Grid item xs={6}>
                <KeyboardTimePicker
                  fullWidth
                  margin="normal"
                  label="To (time)"
                  value={toDate}
                  onChange={handleToDateChange}
                />
              </Grid>
            </Grid>
          </MuiPickersUtilsProvider>
        );
      default:
        break;
    }
  };

  return (
    <Paper square variant="outlined">
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.card}
      >
        <Grid item xs={currentView === 30 ? 6 : 2}>
          <FormControl className={classes.formControl}>
            <Select onChange={handleSelection} defaultValue={currentView}>
              <MenuItem value={10}>By title</MenuItem>
              <MenuItem value={20}>By tags</MenuItem>
              <MenuItem value={30}>By deadline</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {currentView === 30 && (
          <Grid item xs={6}>
            <Button onClick={handleCancelSearch}>Cancel Search</Button>
          </Grid>
        )}
        <Grid item xs={currentView === 30 ? 12 : 6}>
          {searchInput()}
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.data,
    currentView: state.search.view,
    tags: state.search.tags,
    title: state.search.title,
    from: state.search.date.from,
    to: state.search.date.to,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchView: (view) => dispatch(setSearchView(view)),
    searchTitle: (title) => dispatch(searchTitle(title)),
    searchTags: (tags) => dispatch(searchTags(tags)),
    setDate: (from, to) => dispatch(searchDate(from, to)),
    cancelSearch: () => dispatch(cancelSearch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
