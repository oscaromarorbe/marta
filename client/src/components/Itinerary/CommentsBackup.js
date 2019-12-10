import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { getData } from "../../store/actions/reduxFetch";
import CommentInput from "./commentInput";
import { EditButton } from "./editButton";

const CommentsBackup = ({ comments, title }) => {
  const [posts, setPosts] = useState();
  const [rerender, setRerender] = useState(false);
  const [cantidad, setCantidad] = useState();
  const [toUpdate, setToUpdate] = useState();
  const [element, setElement] = useState();

  const comentar = (uri, id, input) => {
    getData(
      uri,
      {
        method: "PUT",
        body: JSON.stringify({
          username: "Anonymous",
          id: id,
          text: input
        }),
        headers: {
          "Content-Type": "application/json"
        }
      },
      () => setRerender(!rerender)
    );
  };
  const createComment = input => {
    getData(
      `/api/itineraries/byTitle/${title}/comments`,
      {
        method: "PUT",
        body: JSON.stringify({
          username: "Anonymous",
          id: `${title}#${cantidad}`,
          text: input
        }),
        headers: {
          "Content-Type": "application/json"
        }
      },
      () => setRerender(!rerender)
    );
  };

  const updateComment = (input,id) => {
    getData(
      `/api/itineraries/byTitle/${title}/comments/update`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          text: input
        }),
        headers: {
          "Content-Type": "application/json"
        }
      },
      res => {
        setRerender(!rerender);
        console.log(res);
      }
    );
  };

  const regularInput = (text, targetId) => {
    return (
    <div> 
      <span>{text}</span>
      <button
      onClick={()=> {setToUpdate(targetId); console.log(targetId);console.log(toUpdate)}}
      >
        Edit
      </button>
      <button> Delete</button>
    </div>
  )
      }
  const editInput = () => {
    return (
    <div className="row justify-content-center">
      <CommentInput
       cantidad={cantidad}
       title={title}
       callback={setElement}
       placeholder={'Leave your comment'}
                  
                  ></CommentInput>
      <button>Back</button>
    </div>
  );
  }

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    getData(`/api/itineraries/byTitle/${title}/comments`, null, data => {
      setPosts(
        data.comments[0].comments.map(comment => (
          <Fragment>
           {regularInput( `${comment.username} said: ${comment.text}`, comment.id)}
            {editInput()}
            <button onClick={() => {updateComment(element, comment.id)}}>commit edit</button>
            </Fragment>
          
        ))
      );
      setCantidad(data.cantidad);

      console.log(data.comments[0].comments);
      console.log(data.cantidad);
    });
  }, [!rerender]);

  return (
    <div>
      {element}
      <div>
        {posts}
    
        
              <CommentInput
                cantidad={cantidad}
                title={title}
                callback={createComment}
                placeholder={'Leave your comment'}
              ></CommentInput>
        
        
    

        <div id="likeAdder"></div>
        <ul id="comments">
          {comments.map(comment => <li color="#fff">{comment}</li>) || comments}
        </ul>
      </div>
    </div>
  );
};
export default CommentsBackup;

/*const form =   <Form.Group className="row p-2">
<Form.Control
  onChange={e => setTextInput(e.target.value)}
  id="comments"
  type="text"
  placeholder="Leave your comment"
  width="10em"
></Form.Control>
<Button
  variant="primary"
  type="submit"
  onClick={() =>
    getData(`/api/itineraries/byTitle/${title}/comments`, {
      method: "PUT",
      body: JSON.stringify({
        username: "Anonymous",
        text: textInput
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }, () => {  getData(`/api/itineraries/byTitle/${title}/comments`, null, data => {
      setPosts(
        data[0].comments.map(comment => (
          <li
            style={{ listStyle: "none" }}
          >{`${comment.username} said: ${comment.text}`}</li>
        ))
      );
    }
    )} )
  }
>
  SEND
</Button>
</Form.Group> */