// React and helpers
import React from 'react';
import { quotes } from '../../helpers/quotes';
// MUI Components
import { Snackbar } from '@material-ui/core';

const QuotesLoading = ({ loading }) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const message = `${randomQuote.text} --By: ${randomQuote.author}`;
  return <Snackbar open={loading} message={message} />;
};

export default QuotesLoading;
