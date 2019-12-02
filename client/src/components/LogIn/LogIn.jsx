import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getData } from "../../store/actions/reduxFetch";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";

const responseGoogle = response => {
  console.log(response);
};
class LogIn extends Component {
  state = {
    username: "",
    password: "",
    sessionuser: "",
    googleuser: ""
  };

  handleUsername(event) {
    this.setState({ username: event.target.value });
  }
  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const bodyData = {
      email: this.state.email,
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
      data => console.log(data)
    );
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
      <div id={"logForm"}>
        <Form className={"col-8"}>
          <Form.Group controlId={"formBasicEmail"}>
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={e => this.handleUsername(e)}
              value={this.state.username}
              type={"text"}
              placeholder={"Enter username"}
            />
            <Form.Text className={"text-muted"}>
              Type your e-mail or username
            </Form.Text>
          </Form.Group>
          <Form.Group controlId={"formBasicPassword"}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={e => this.handlePassword(e)}
              value={this.state.email}
              type={"password"}
              placeholder={"Password"}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check out" />
          </Form.Group>
          <Button  onClick={event => this.handleSubmit(event)} variant="success" type="submit">
            Submit
          </Button>
          <GoogleLogin clientId="1083777488269-qtccrdu14cm0mhds2bo07tkuroik5ak7.apps.googleusercontent.com"
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