export const Types = {
  AUTH_REQUEST: "AUTH_REQUEST",
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_FAILED: 'AUTH_FAILED',

  REGISTER_REQUEST: "REGISTER_REQUEST",
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILED: 'REGISTER_FAILED',
}

const INITIAL_STATE = {
  user: null,

  loading: false,
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
  }
}

export const login = () => {
  return (dispatch) => {
    try {
      dispatch({ type: Types.AUTH_REQUEST,  payload: params })
    } catch(err) {
      dispatch({ type: Types.AUTH_FAILED,  payload: err })
    }
  }
}

export const register = () => {
  return (dispatch) => {
    try {
      dispatch({ type: Types.REGISTER_REQUEST,  payload: params })
    } catch(err) {
      dispatch({ type: Types.REGISTER_FAILED,  payload: err })
    }
  }
}