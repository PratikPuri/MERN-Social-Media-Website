import axios from 'axios'; 
import { setAlert } from './alert';
import {GET_PROFILES,
  UPDATE_PROFILE,
  ACCOUNT_DELETED,
  GET_REPOS,
  NO_REPOS
} from './types';

export const getProfiles = () => async (dispatch) => {
    try {
      const res = await axios.post('/profiles', {headers: {'Content-Type': 'application/json'}});
      dispatch({type: GET_PROFILES,payload: res.data});
    } catch (err) {
        console.log(err.message);
    //   dispatch({type: PROFILE_ERROR, payload: { msg: err.response.statusText, status: err.response.status }});
    }
  };

// Create or update profile
export const createProfile = (formData, navigate) =>
  async (dispatch) => {
    try {
      const res = await axios.post('/api/profile', formData, {headers: {'Content-Type': 'application/json'}});
      dispatch({ type: GET_PROFILES, payload: res.data });
      dispatch(setAlert('Profile Updated', 'success'));
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
    }
  };