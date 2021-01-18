// React and helpers
import React from 'react';
import { connect } from 'react-redux';
// Actions
import {
  searchTitle,
  searchTags,
  cancelSearch,
  setSearchView,
} from '../../redux/actions/searchActions';
// MUI Components
import { Card, Grid, Paper, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SearchBar from 'material-ui-search-bar';
import Autocomplete from '@material-ui/lab/Autocomplete';
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

  return (
    <Paper square variant="outlined">
      <Grid
        container
        direction="row-reverse"
        justify="space-around"
        alignItems="center"
        className={classes.card}
      >
        <Grid item xs={6}>
          {currentView === 10 ? (
            <Card variant="outlined">
              <SearchBar
                value={title}
                onChange={handleSearchChange}
                onCancelSearch={handleCancelSearch}
              />
            </Card>
          ) : (
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
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Add Tag"
                />
              )}
            />
          )}
        </Grid>
        <Grid item xs={2}>
          <FormControl className={classes.formControl}>
            <Select onChange={handleSelection} defaultValue={currentView}>
              <MenuItem value={10}>By title</MenuItem>
              <MenuItem value={20}>By tags</MenuItem>
            </Select>
          </FormControl>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchView: (view) => dispatch(setSearchView(view)),
    searchTitle: (title) => dispatch(searchTitle(title)),
    searchTags: (tags) => dispatch(searchTags(tags)),
    cancelSearch: () => dispatch(cancelSearch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
