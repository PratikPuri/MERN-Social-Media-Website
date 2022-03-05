import {GET_POSTS, UPDATE_LIKES, ADD_POST} from '../actions/types';
  
  const initialState = {
    posts: [],
    loading: true,
    error: {}
  };
  
  function postReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_POSTS:
        return {
          ...state,
          posts: payload,
          loading: false
        };
    case UPDATE_LIKES:
        return {
            ...state,
            posts: state.posts.map((post) => post._id === payload.id ? 
            { ...post, likes: payload.likes } : 
            post),
            loading: false
        }
        case ADD_POST:
            return {
                ...state,
                posts: [payload, ...state.posts],
                loading: false
            };
      default:
        return state;
    }
  }
  
  export default postReducer;