import { Alert } from 'react-native';
import firebase from '../../config/firebase';
const db = firebase.database();

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
        genres: action.payload,
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

    default: 
      return state
  }
}

export const getGenres = (params) => {
  return async (dispatch) => {
    try {
      dispatch({ type: Types.GET_GENRES_REQUEST,  payload: params })
      const data = await db.ref('genres/').get();
    
      const mapped = Object.entries(data?.val()).map(([key, value]) => ({ id: key, ...value}));
      dispatch({ 
        type: Types.GET_GENRES_SUCCESS,
        payload: mapped 
      })
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

export const saveGenre = ({ id, ...params}) => {
  return async (dispatch) => {

    try {
      dispatch({ type: Types.SAVE_GENRE_REQUEST,  payload: params })

      let data;

      if(id) {
        data = await db.ref(`genres/`).child(id).set(params);  
      } else {
        data = await db.ref("genres/").push(params);  
      }
      
      dispatch({ type: Types.SAVE_GENRE_SUCCESS })
      dispatch({ type: Types.GET_GENRES_REQUEST })
    } catch(err) {
      dispatch({ type: Types.SAVE_GENRE_FAILED,  payload: err })
    }
  }
}

export const deleteGenre = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: Types.DELETE_GENRE_REQUEST,  payload: params })
      const data = await db.ref("genres/").child(id).remove(); 
    } catch(err) {
      dispatch({ type: Types.DELETE_GENRE_FAILED,  payload: err })
    }
  }
}