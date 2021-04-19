import React from 'react';
import AuthReducer from '../stacks/Auth/ducks'
import BooksReducer from '../stacks/Book/ducks'
import GenreReducer from '../stacks/Genre/ducks'

export default () => ({
  auth: AuthReducer,
  books: BooksReducer,
  genres: GenreReducer
})