import axios from 'axios';
import { push } from 'connected-react-router';

import { loginSuccess, loginFailure, logoutSuccess, signupFailure, signupSuccess } from '../actions/authAction';
import { API_URL, JWT_TOKEN } from '../config/config';
import { setLocalStorage, clearLocalStorage } from '../utils/storageUtil';

export const login = ({ email, password }) => {
  return (dispatch) => {
    axios
      .post(API_URL + 'auth/login', { username: email, password })
      .then((response) => {
        dispatch(loginSuccess(response.data.token));
        setLocalStorage(JWT_TOKEN, response.data.token);
        dispatch(push('/dashboard'));
      })
      .catch((error) => {
        dispatch(loginFailure(error.response.data));
      });
  };
};

export const signup = ({ username, password, name }) => {
  return (dispatch) => {
    axios
      .post(API_URL + 'auth/signup', { username, password, name })
      .then((response) => {
        dispatch(signupSuccess(response.data.token));
        setLocalStorage(JWT_TOKEN, response.data.token);
        dispatch(push('/dashboard'));
      })
      .catch((error) => {
        dispatch(signupFailure(error.response.data));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    clearLocalStorage(JWT_TOKEN);
    dispatch(logoutSuccess());
    dispatch(push('/'));
    return false;
  };
};
