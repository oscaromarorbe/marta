import { getData } from "./reduxFetch";
const jwt = require('jsonwebtoken');

export const userPostFetch = user => {
    return dispatch => {
      return fetch("/api/users/register", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(res => {
        if(res.success){
          const token = res.token
          localStorage.setItem("token", token)
          console.log(jwt.decode(token))
          dispatch(loginUser(jwt.decode(token)))
        }else{
          console.log(res.msg)
          console.log("Gil");
        }
      }
      );
    }
  }

  export const userLoginFetch = user => {
    return dispatch => {
      return getData("/api/users/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(user)
      },(data) => { 
             if(data.success===true) {
               localStorage.setItem("token", data.token)
               console.log("data",jwt.decode(data.token))
               dispatch(loginUser(jwt.decode(data.token)))
            }else{
              console.log(data.msg);
            }  
          })   
    //   .then(res => res.json())
    //   .catch(error => console.error('Error:', error))
    //   .then(res => {
    //     if(res.success){
    //       const token = res.token
    //       localStorage.setItem("token", token)
    //       console.log(jwt.decode(token))
    //       dispatch(loginUser(jwt.decode(token)))
    //     }else{
    //       console.log(res.msg)
    //       console.log("Gil");
    //     }
    //   }
    //   );
    }
  }

  export const getUserFetch = () => {
    return dispatch => {
        console.log("Checkeando User")
      const token = localStorage.token;
      if (token) {
        return fetch("/api/users/login", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then( () =>  {
              console.log("User",jwt.decode(token));
              dispatch(loginUser(jwt.decode(token)))
            }
          )
      }
    }
  }
  
  const loginUser = userObj => ({
      type: 'LOGIN_USER',
      payload: userObj
  })