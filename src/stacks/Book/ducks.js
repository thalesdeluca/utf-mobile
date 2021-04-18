export const Types = {
  GET_BOOKS_REQUEST: "GET_BOOKS_REQUEST",
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILED: 'GET_BOOKS_FAILED',

  GET_BOOK_BY_ID_REQUEST: 'GET_BOOK_BY_ID_REQUEST',
  GET_BOOK_BY_ID_SUCCESS: 'GET_BOOK_BY_ID_SUCCESS',
  GET_BOOK_BY_ID_FAILED: 'GET_BOOK_BY_ID_FAILED',

  SAVE_BOOK_REQUEST: 'SAVE_BOOK_REQUEST',
  SAVE_BOOK_SUCCESS: 'SAVE_BOOK_SUCCESS',
  SAVE_BOOK_FAILED: 'SAVE_BOOK_FAILED',

  DELETE_BOOK_REQUEST: 'DELETE_BOOK_REQUEST',
  DELETE_BOOK_SUCCESS: 'DELETE_BOOK_SUCCESS',
  DELETE_BOOK_FAILED: 'DELETE_BOOK_FAILED',
}

const INITIAL_STATE = {
  books: [],
  book: null,
  size: 10,

  loading: false,
  success: false,
  error: false,
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case Types.GET_BOOKS_REQUEST: 
      return  {
        ...state,
        size: action?.payload?.size,
        books: [],
        loading: true,
        error: false
      }
    case Types.GET_BOOKS_SUCCESS: 
      return  {
        ...state,
        books: [],
        loading: false,
        error: false
      }
    case Types.GET_BOOKS_FAILED: 
      return  {
        ...state,
        loading: false,
        error: action.payload
      }


    case Types.GET_BOOK_BY_ID_REQUEST: 
      return  {
        ...state,
        book: null,
        loading: true,
        error: false
      }
    case Types.GET_BOOK_BY_ID_SUCCESS: 
      return  {
        ...state,
        book: null,
        loading: false,
        error: false
      }
    case Types.GET_BOOK_BY_ID_FAILED: 
      return  {
        ...state,
        book: null,
        loading: false,
        error: action.payload
      }

    case Types.DELETE_BOOK_REQUEST:
    case Types.SAVE_BOOK_REQUEST: 
      return  {
        ...state,
        loading: true,
        error: false,
        success: false
      }
    case Types.DELETE_BOOK_SUCCESS:
    case Types.SAVE_BOOK_SUCCESS: 
      return  {
        ...state,
        success: true,
        loading: false,
        error: false
      }
    case Types.DELETE_BOOK_FAILED:
    case Types.SAVE_BOOK_FAILED: 
      return  {
        ...state,
        success: false,
        loading: false,
        error: action.payload
      }
  }
}

export const getBooks = (params) => {
  return (dispatch) => {
    try {
      dispatch({ type: Types.GET_BOOKS_REQUEST,  payload: params })
    } catch(err) {
      dispatch({ type: Types.GET_BOOKS_FAILED,  payload: err })
    }
  }
}


export const getBookById = (params) => {
  return (dispatch) => {
    try {
      dispatch({ type: Types.GET_BOOK_BY_ID_REQUEST,  payload: params })
    } catch(err) {
      dispatch({ type: Types.GET_BOOK_BY_ID_FAILED,  payload: err })
    }
  }
}

export const saveBook = () => {
  return (dispatch) => {
    try {
      dispatch({ type: Types.SAVE_BOOK_REQUEST,  payload: params })
    } catch(err) {
      dispatch({ type: Types.SAVE_BOOK_FAILED,  payload: err })
    }
  }
}

export const deleteBook = () => {
  return (dispatch) => {
    try {
      dispatch({ type: Types.DELETE_BOOK_REQUEST,  payload: params })
    } catch(err) {
      dispatch({ type: Types.DELETE_BOOK_FAILED,  payload: err })
    }
  }
}