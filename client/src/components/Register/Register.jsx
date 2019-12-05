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
    isLogged:"",
    error:""
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
    }

  handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    await this.props.userPostFetch(this.state)
    const { logged } = this.props;
    if(logged == true){
      this.setState({isLogged:true})
    }else if(logged == false){
      this.setState({error:true})
    }
  }

  render() {
    console.log("prop logged", this.props.logged)
    console.log("isLogged", this.state.isLogged)
    console.log("error", this.state.error)
    return (
      <div>
             {this.state.isLogged ? <RegisterSuccess {...this.props}/> : <div className=""></div>}
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

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

const mapStateToProps = state => {
  return {
    logged: state.user.logged
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);