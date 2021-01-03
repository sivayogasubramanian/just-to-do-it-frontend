import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';

const Tags = () => {
  const classes = useStyles();
  const tags = new Set();
  const todos = useSelector((state) => state.todos);

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
              <LabelOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={tag} />
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
};

export default Tags;
