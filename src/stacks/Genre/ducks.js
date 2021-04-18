export const Types = {
  GET_GENRES_REQUEST: "GET_GENRES_REQUEST",
  GET_GENRES_SUCCESS: 'GET_GENRES_SUCCESS',
  GET_GENRES_FAILED: 'GET_GENRES_FAILED',

  GET_GENRE_BY_ID_REQUEST: 'GET_GENRE_BY_ID_REQUEST',
  GET_GENRE_BY_ID_SUCCESS: 'GET_GENRE_BY_ID_SUCCESS',
  GET_GENRE_BY_ID_FAILED: 'GET_GENRE_BY_ID_FAILED',

  SAVE_GENRE_REQUEST: 'SAVE_GENRE_REQUEST',
  SAVE_GENRE_SUCCESS: 'SAVE_GENRE_SUCCESS',
  SAVE_GENRE_FAILED: 'SAVE_GENRE_FAILED',

  DELETE_GENRE_REQUEST: 'DELETE_GENRE_REQUEST',
  DELETE_GENRE_SUCCESS: 'DELETE_GENRE_SUCCESS',
  DELETE_GENRE_FAILED: 'DELETE_GENRE_FAILED',
}

const INITIAL_STATE = {
  genres: [],
  genre: null,
  size: 10,

  loading: false,
  success: false,
  error: false,
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case Types.GET_GENRES_REQUEST: 
      return  {
        ...state,
        size: action?.payload?.size,
        genres: [],
        loading: true,
        error: false
      }
    case Types.GET_GENRES_SUCCESS: 
      return  {
        ...state,
        genres: [],
        loading: false,
        error: false
      }
    case Types.GET_GENRES_FAILED: 
      return  {
        ...state,
        loading: false,
        error: action.payload
      }


    case Types.GET_GENRE_BY_ID_REQUEST: 
      return  {
        ...state,
        genre: null,
        loading: true,
        error: false
      }
    case Types.GET_GENRE_BY_ID_SUCCESS: 
      return  {
        ...state,
        genre: null,
        loading: false,
        error: false
      }
    case Types.GET_GENRE_BY_ID_FAILED: 
      return  {
        ...state,
        genre: null,
        loading: false,
        error: action.payload
      }

    case Types.DELETE_GENRE_REQUEST:
    case Types.SAVE_GENRE_REQUEST: 
      return  {
        ...state,
        loading: true,
        error: false,
        success: false
      }
    case Types.DELETE_GENRE_SUCCESS:
    case Types.SAVE_GENRE_SUCCESS: 
      return  {
        ...state,
        success: true,
        loading: false,
        error: false
      }
    case Types.DELETE_GENRE_FAILED:
    case Types.SAVE_GENRE_FAILED: 
      return  {
        ...state,
        success: false,
        loading: false,
        error: action.payload
      }
  }
}

export const getGenres = (params) => {
  return (dispatch) => {
    try {
      dispatch({ type: Types.GET_GENRES_REQUEST,  payload: params })
    } catch(err) {
      dispatch({ type: Types.GET_GENRES_FAILED,  payload: err })
    }
  }
}


export const getGenreById = (params) => {
  return (dispatch) => {
    try {
      dispatch({ type: Types.GET_GENRE_BY_ID_REQUEST,  payload: params })
    } catch(err) {
      dispatch({ type: Types.GET_GENRE_BY_ID_FAILED,  payload: err })
    }
  }
}

export const saveGenre = () => {
  return (dispatch) => {
    try {
      dispatch({ type: Types.SAVE_GENRE_REQUEST,  payload: params })
    } catch(err) {
      dispatch({ type: Types.SAVE_GENRE_FAILED,  payload: err })
    }
  }
}

export const deleteGenre = () => {
  return (dispatch) => {
    try {
      dispatch({ type: Types.DELETE_GENRE_REQUEST,  payload: params })
    } catch(err) {
      dispatch({ type: Types.DELETE_GENRE_FAILED,  payload: err })
    }
  }
}