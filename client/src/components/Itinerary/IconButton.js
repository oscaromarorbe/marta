  import React from 'react';
  import { connect } from 'react-redux';
  import {getData} from '../../store/actions/reduxFetch';
  import {Button} from 'react-bootstrap';

    const mapStateToProps = state => {
    return {
      user:state.user.currentUser.email,
      itinLiked: state.user.currentUser.itinerariesLiked,
      itineraries: state.itineraries.itineraries,
    };
  };


  const IconButton = props => {

      
          const { user } = props; 
      
    console.log("hola ",props);

    return (

      <>
  
      
          <Button className="btn" onClick={ () => getData(`/api/itineraries/byTitle/${props.title}/likes`, {
          method: "PUT",
          body: JSON.stringify({
            username: {user}
          }),
          headers: {
            "Content-Type": "application/json"
          }
        },(response) => console.log(response))}>

           <a className="fas fa-thumbs-up"/>
       
        
      </Button>
            <Button className="btn" onClick={  () => getData(`/api/itineraries/byTitle/${props.title}/dislikes`, {
            method: "PUT",
            body: JSON.stringify({
              username: {user}
            }),
            headers: {
              "Content-Type": "application/json"
            }
          },(response) => console.log(response))}>
                <a className="fas fa-thumbs-down"/>
        </Button> 
        
    </>
    );
      }

export default connect(mapStateToProps)(IconButton);