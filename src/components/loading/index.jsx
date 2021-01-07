// React and helpers
import React from 'react';
import { quotes } from '../../helpers/quotes';
// MUI Components
import { Snackbar } from '@material-ui/core';

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
const message = `${randomQuote.text} --By: ${randomQuote.author}`;

const TodosLoading = () => {
  return <Snackbar open={true} message={message} />;
};

export default TodosLoading;