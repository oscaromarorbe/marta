import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getData } from "../../store/actions/reduxFetch";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import LoginSuccess from '../Alerts/LoginSuccess';
import LoginError from '../Alerts/LoginError';

const responseGoogle = response => {
  console.log(response);
};
class LogIn extends Component {
  state = {
    username: "",
    password: "",
    sessionuser: "",
    googleuser: "",
    logged:false,
    error:false
  };


  handleChange = async (event) =>{
    await this.setState({[event.target.name]:event.target.value});
 /*    if (this.state.username.length==1|| 
      this.state.password.length ==1||
      this.state.email.length ==1) {this.setState({error: false})}
    console.log(this.state) */
    }

  cleanForm = () => {
    this.setState({ username: "",
    email: "",
    password: ""})
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const bodyData = {
      username: this.state.username,
      password: this.state.password
    };

    getData(
      "/api/users/login",
      {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
          "Content-Type": "application/json"
        }
      }, 
     (data) => { 
      if(data.success===true) {
        this.setState({logged: true})
     }else{
       this.setState({error: true})
     }  
   })
   }

  handleGMailSubmit(bodyData) {
    
 
    getData(
      "/logged",
      {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
          "Content-Type": "application/json"
        }
      },
      responseData => console.log(responseData)
    );
  }

  render() {
    return (
     
     <div>

      {this.state.logged ? <LoginSuccess {...this.props}/> : <div className=""></div>}
      {this.state.error ? <LoginError cleanForm={this.cleanForm }{...this.props}/> : <div className=""></div>}
        <div id={"logForm"}>
        <Form className={"col-8"}>
          <Form.Group controlId={"formBasicEmail"}>
            <Form.Control
              onChange={this.handleChange}
              value={this.state.username}
              type={"text"}
              name="username"
              placeholder={"Enter username"}
            />
          </Form.Group>
          <Form.Group controlId={"formBasicPassword"}>
            <Form.Control
              onChange={this.handleChange}
              value={this.state.password}
              type={"password"}
              name="password"
              placeholder={"Password"}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check out" />
          </Form.Group>
          <Button  onClick={event => this.handleSubmit(event)} variant="success" type="submit">
            Submit
          </Button>
          <GoogleLogin  className="rounded ml-2" 
              clientId="1083777488269-qtccrdu14cm0mhds2bo07tkuroik5ak7.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle => {
                const body= {
                    username: responseGoogle.profileObj.name,
                    email: responseGoogle.profileObj.email,
                    profilePicture: responseGoogle.profileObj.imageUrl
                
                }
                console.log(body);

               this.handleGMailSubmit(body)

              }}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}></GoogleLogin>

         
        </Form>
        </div>  
      </div>
    );
  }
}

export default LogIn;
/*getData("/api/users/register", {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json"
      }
    }, (data)=>alert(data)); */
const googlelogin =  <GoogleLogin
clientId="1083777488269-qtccrdu14cm0mhds2bo07tkuroik5ak7.apps.googleusercontent.com"
buttonText="Login"
onSuccess={responseGoogle => {
  console.log(responseGoogle.profileObj.email);

  this.setState({ googleuser: responseGoogle.profileObj.email });
}}
onFailure={responseGoogle}
cookiePolicy={"single_host_origin"}
/>