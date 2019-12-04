import { getData } from "./reduxFetch";
const jwt = require('jsonwebtoken');

export const userPostFetch = user => {
    return dispatch => {
      return getData("/api/users/register", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(user)
      },(data) => { 
             if(data.success===true) {
               localStorage.setItem("token", data.token)
               console.log(data)
               console.log("data",jwt.decode(data.token))
               dispatch(loginUser(jwt.decode(data.token)))
            }else{
              localStorage.removeItem("token")
              console.log(data.msg);
            }  
      }) 
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
               dispatch(loginUser(data))
            }else{
              localStorage.removeItem("token")
              console.log(data.msg);
            }  
      })   
    }
  }

  export const getUserFetch = () => {
    return dispatch => {
      const token = localStorage.token;
      if (token) {
        return getData("/api/users/login", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
          }
        },(data) => { 
             if(data.success===true) {
               localStorage.setItem("token", data.token)
               dispatch(loginUser(data))
            }else{
              localStorage.removeItem("token")
              console.log(data.msg);
            }  
      })  
      }
    }
  }
  
  const loginUser = data => ({
      type: 'LOGIN_USER',
      payload: jwt.decode(data.token),
      logged: data.logged
  })