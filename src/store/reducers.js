import React from 'react';
import { combineReducers } from 'redux';
import AuthReducer from '../stacks/Auth/ducks'
import BooksReducer from '../stacks/Book/ducks'
import GenreReducer from '../stacks/Genre/ducks'

export default combineReducers({
  auth: AuthReducer,
  books: BooksReducer,
  genres: GenreReducer
})