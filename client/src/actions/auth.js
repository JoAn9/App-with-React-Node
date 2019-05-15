import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAILED } from './types';

// Register User

export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/users/register', body, config);
    console.log('res in action: ', res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log('err.response: ', err.response)
    const errors = err.response.data;
    if (errors) {
      const errorsArray = Object.entries(errors);

      // ToDo: get array with errors from BE
      errorsArray.forEach(error => dispatch(setAlert(error[1], 'danger')));
    }

    dispatch({
      type: REGISTER_FAILED,
    });
  }
}