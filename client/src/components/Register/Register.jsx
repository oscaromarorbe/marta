import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { getData } from "../../store/actions/reduxFetch";
import Button from 'react-bootstrap/Button'
import RegisterSuccess from "../Alerts/RegisterSuccess";
import RegisterError from "../Alerts/RegisterError";
import {connect} from 'react-redux';
import {userPostFetch} from '../../store/actions/userActions';

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    logged:false,
    error:false
  };

  cleanForm = () => {
    this.setState({ username: "",
    email: "",
    password: ""})
  }

  handleChange = async (event) =>{
    await this.setState({[event.target.name]:event.target.value});
    if (this.state.username.length==1|| 
      this.state.password.length ==1||
      this.state.email.length ==1) {this.setState({error: false})}
    console.log(this.state)
    }

  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.userPostFetch(this.state)
  }

  render() {
    console.log(this.state.username);
    console.log(this.state.email);
    console.log(this.state.password);

    return (
      <div>
             {this.state.logged ? <RegisterSuccess {...this.props}/> : <div className=""></div>}
             {this.state.error ? <RegisterError cleanForm={this.cleanForm }{...this.props}/> : <div className=""></div>}

            <Form  className="justify-content"  className="col-8 " id="registerForm">

      
                    <div className="align-items-center">          
                        
                        {/* <img className="" id={"userPic"}src={userPic} height="120vh"></img> */}

                      {/*   <input type="file" id="uploadPic" /> */}
                    </div>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="Choose a username" name="username"               
                            className="mb-2"
                            placeholder="username" value={this.state.username}
                            onChange={this.handleChange} />
       
                        <Form.Control type="Type your email" name="email"
                            className="mb-2"
                            placeholder="your@email.com" value={this.state.email}
                            onChange={this.handleChange} />

                         <Form.Control type="password" name="password"                         
                            className="mb-2"
                            placeholder="password" value={this.state.password}
                            onChange={this.handleChange} />
                        </Form.Group>  
                        <Button variant='success' onClick={this.handleSubmit} value='submit' type='submit'>REGISTER</Button>
                     
                </Form>
               
            </div>
    );
  }
}

//export default Register;

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Register);