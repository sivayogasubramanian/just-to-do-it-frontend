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
import { Card, Grid, Slide } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SearchBar from 'material-ui-search-bar';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
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

  const allTags = new Set();
  todos.map((todo) =>
    todo.attributes.tags.forEach((tag) => {
      allTags.add(tag);
    })
  );

  const handleSelection = (e) => {
    cancelSearch();
    setSearchView(e.target.value);
  };
  const handleSearchChange = (e) => {
    searchTitle(e);
  };
  const handleCancelSearch = () => cancelSearch();
  const handleAutocompleteChange = (event, values) => {
    searchTags(values);
  };

  return (
    <>
      <Slide
        direction="left"
        in={true}
        mountOnEnter
        timeout={{ enter: 200, exit: 200 }}
      >
        <Grid
          container
          direction="row-reverse"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={6}>
            {currentView === 10 ? (
              <Card variant="outlined" className={classes.card}>
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
                options={[...allTags]}
                getOptionLabel={(option) => option}
                onChange={handleAutocompleteChange}
                filterSelectedOptions
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
              <InputLabel>Filter</InputLabel>
              <Select onChange={handleSelection} defaultValue={currentView}>
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
