// React and helpers
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// Actions
import { selectTag } from '../../redux/actions/miscActions';
// MUI Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
// MUI Icons
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import LabelTwoToneIcon from '@material-ui/icons/LabelTwoTone';
// Styles
import { useStyles } from './styles';

const Tags = ({ todos, selectTag }) => {
  const classes = useStyles();
  const tags = new Set();

  todos.data.map((todo) =>
    todo.attributes.tags.forEach((tag) => {
      tags.add(tag);
    })
  );

  return (
    <List>
      {[...tags].map((tag, index) => (
        <Tooltip key={index} title={tag}>
          <NavLink exact to="/tags" onClick={() => selectTag(tag)}>
            <ListItem className={classes.listItems} button key={index}>
              <ListItemIcon>
                {index % 2 === 0 ? <LabelTwoToneIcon /> : <LabelOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={tag} />
            </ListItem>
          </NavLink>
        </Tooltip>
      ))}
    </List>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTag: (tag) => dispatch(selectTag(tag)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
