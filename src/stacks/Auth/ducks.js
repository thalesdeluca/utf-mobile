import { Alert } from 'react-native';
import firebase from '../../config/firebase';

export const Types = {
  AUTH_REQUEST: "AUTH_REQUEST",
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_LOGOUT: 'AUTH_LOGOUT',
  AUTH_FAILED: 'AUTH_FAILED',
}

const INITIAL_STATE = {
  user: null,

  loading: false,
  error: false,
  success: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
   case Types.AUTH_REQUEST: 
      return  {
        ...state,
        user: null,
        loading: true,
        error: false,
      }
    case Types.AUTH_SUCCESS: 
      return  {
        ...state,
        user: action.payload,
        loading: false,
        error: false,
      }
    case Types.AUTH_FAILED: 
      return  {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      }

    case Types.AUTH_LOGOUT: 
      return  {
        ...state,
        user: null,
        loading: false,
        error: null,
      }
      
    default: return state;
  }
}

export const login = (params) => {

  return async (dispatch) => {
    try {
      const { email, password } = params
      dispatch({ type: Types.AUTH_REQUEST,  payload: params })

      const user = await firebase.auth().signInWithEmailAndPassword(email, password);

      dispatch({ type: Types.AUTH_SUCCESS,  payload: user })
    } catch(err) {
      console.log("err", err)
      Alert.alert("Error", err.message);
      dispatch({ type: Types.AUTH_FAILED,  payload: err })
    }
  }
}

export const register = (params) => {
  return async (dispatch) => {
    try {
      const { email, password } = params
      dispatch({ type: Types.AUTH_REQUEST,  payload: params })

      const user = await firebase.auth().createUserWithEmailAndPassword(email, password);

      dispatch({ type: Types.AUTH_SUCCESS,  payload: user })

    } catch(err) {
      Alert.alert("Error", err.message);
      dispatch({ type: Types.AUTH_FAILED,  payload: err })
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: Types.AUTH_LOGOUT})
  }
}