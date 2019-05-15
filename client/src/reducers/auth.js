import { REGISTER_SUCCESS, REGISTER_FAILED } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user:  null,
}

export default function(state = initialState, action) {
  const { type, payload } = action;
  console.log('payload: ', payload)
  switch(type) {
    case REGISTER_SUCCESS:
    // ToDo: no token in payload
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAILED:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      }
    default:
      return state;
  }
}