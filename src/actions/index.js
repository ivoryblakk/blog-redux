import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash'

export const fetchPostsAndUsers = () => async (dispatch, getState )=> {
  await dispatch(fetchPosts());
   //console.log("getState",getState().posts)

   const userId = _.uniq(_.map(getState().posts, 'userId'));
   userId.forEach(id => dispatch(fetchUser(id)));
   //async does not forEach
};

//definfing a function that returnts a function  i.e. fetchPosts = () => async dispatch => {}
export const fetchPosts = () => async dispatch =>  {
  const response = await jsonPlaceholder.get('/posts');

 dispatch ({
     type: 'FETCH_POSTS',
     payload: response.data
    });
};






export const fetchUser  = id => async dispatch  =>  {
  const response = await jsonPlaceholder.get(`/users/${id}`);

 dispatch ({
     type: 'FETCH_USER',
     payload: response.data
    });
};

// This the final product of memoize.... The problems is that it can only fetch one time... so there is an udate to the api memoize will not fetch the new data
//export const fetchUser  = id =>  dispatch  => _fetchUser(id, dispatch);
// const _fetchUser= _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch ({
//           type: 'FETCH_USER',
//           payload: response.data
//          });
// })


// This function dosent work
// export const fetchUser =_.memoize( function (id) {
//   return async function(dispatch){
//    const response = await jsonPlaceholder.get(`/users/${id}`);
 
//   dispatch ({
//       type: 'FETCH_USER',
//       payload: response.data
//      });
//    }
//  });







// We could use this as well... but we wont
// export const selectPost = () => {
//     return{
//         type: 'SELECT_POST'
//     }
// }

// Breaks the roles of making an action creator
//  
// export const fetchPosts = async () => {

//     const responce = await jsonPlaceholder.get('/posts');
    
//     return {
//         type: 'FETCH_POSTS',
//         payload: responce
//     };
//    };



// Version 2
//export const fetchPosts = () => {
// return function( dispatch, getState) {
//     const promise =   jsonPlaceholder.get('/posts');

// return {
//     type: 'FETCH_POSTS',
//     payload: promise
// };
// }
// };
