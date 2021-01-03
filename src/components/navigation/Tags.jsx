import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';
import { useStyles } from './styles';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import LabelTwoToneIcon from '@material-ui/icons/LabelTwoTone';

const Tags = ({ todos }) => {
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
        <NavLink exact to={{ pathname: '/tags', props: { tag } }} key={index}>
          <ListItem className={classes.listItems} button key={index}>
            <ListItemIcon>
              {index % 2 === 0 ? <LabelTwoToneIcon /> : <LabelOutlinedIcon />}
            </ListItemIcon>
            <ListItemText primary={tag} />
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(Tags);
