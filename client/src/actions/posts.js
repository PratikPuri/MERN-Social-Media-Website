import axios from 'axios'; 
import {GET_POSTS, UPDATE_LIKES,ADD_POST} from './types';

export const getPosts = () => async dispatch => {
    try {
      const res = await axios.get('/api/posts');
      dispatch({type: GET_POSTS,payload: res.data});
    } catch (err) {
        console.log(err.message);
    //   dispatch({type: PROFILE_ERROR, payload: { msg: err.response.statusText, status: err.response.status }});
    }
  };

export const like = (id) => async dispatch => {
    try {
      const res = await axios.put(`/api/posts/like/${id}`,{headers: {'Content-Type': 'application/json'}});
      console.log(res);
      dispatch({type: UPDATE_LIKES,payload: {id, likes:res.data}});
    } catch (err) {
        console.log(err.message);
    //   dispatch({type: PROFILE_ERROR, payload: { msg: err.response.statusText, status: err.response.status }});
    }
  };

  export const addPost = (text) => async dispatch => {
    try {
      const res = await axios.post('/api/posts',text);
      dispatch({type: ADD_POST,payload: res.data});
    } catch (err) {
        console.log(err.message);
    //   dispatch({type: PROFILE_ERROR, payload: { msg: err.response.statusText, status: err.response.status }});
    }
  };