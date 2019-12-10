import {
    REQUEST_ITINERARIES,
    REQUEST_ITINERARIES_SUCCESS,
    REQUEST_ACTIVITIES,
    RESET_ACTIVITIES,
    REQUEST_ACTIVITIES_SUCCESS,
    REQUEST_COMMENTS,
    REQUEST_COMMENTS_SUCCESS,
    // POST_COMMENTS,
    // POST_COMMENTS_SUCCESS,
    // POST_LIKES_SUCCESS,
     POST_LIKE,
    // POST_LIKES,
    REQUEST_LIKES_SUCCESS,
    REQUEST_LIKES
  } from "../actions/ActionTypes";

export function requestItineraries() {
    return {
      type: REQUEST_ITINERARIES
    };
  }
  
  export function requestItinerariesSuccess(data) {
    return {
      type: REQUEST_ITINERARIES_SUCCESS,
      itineraries: data
    };
  }

export function requestActivities() {
    return {
      type: REQUEST_ACTIVITIES
    };
  }
  
  export function requestActivitiesSuccess(data) {
    return {
      type: REQUEST_ACTIVITIES_SUCCESS,
      activities: data
    };
  }

  export function resetActivities() {
    return {
      type: RESET_ACTIVITIES
    }
  }
  
  export function requestComments() {
    return {
      type: REQUEST_COMMENTS
    };
  }

  export function requestCommentsSuccess(data) {
    return {
      type: REQUEST_COMMENTS_SUCCESS,
      activities: data
    };
  }
  
//   function postComments(data) {
//       return {
//           type: POST_COMMENTS,
//           posts: data
//       }
//   }
  
//   function postCommentsSuccess() {
//     return {
//         type: POST_COMMENTS_SUCCESS,
//     }
// }

export function requestLikesSuccess(data) {
  return {
    type: REQUEST_LIKES_SUCCESS,
    activities: data
  };
}

// function postLikes(data) {
//     return {
//         type: POST_LIKES,
//         posts: data
//     }
// }

// function postLikesSuccess() {
//   return {
//       type: POST_LIKES_SUCCESS,
//   }

  
export function requestLikes() {
  return {
    type: REQUEST_LIKES
  };
}

export function postLike(){
return{
type:POST_LIKE
  }
}



  
  