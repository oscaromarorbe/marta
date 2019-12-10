import React, { Fragment } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { getData } from "../../store/actions/reduxFetch";
import CommentInput from "./commentInput";
// import { EditButton } from "./editButton";
import { CommentItem } from "./CommentItem";
// import { Link } from "react-router-dom";
​
​
​
//1) Conectar con Redux, traer user(nombre y loged) (mapstatetoprops)
​
​
const Comments = ({ comments, title, city }) => {
  const [posts, setPosts] = useState();
  const [rerender, setRerender] = useState(false);
  const [cantidad, setCantidad] = useState();
  // const [toUpdate, setToUpdate] = useState();
  // const [textBox, setTextBox] = useState();
​
  // const unBlockRerender = () => {
  //   setRerender(!rerender);
  // };
  // const comentar = (uri, id, input) => {
  //   getData(
  //     uri,
  //     {
  //       method: "PUT",
  //       body: JSON.stringify({
  //         username: "Anonymous",
  //         id: id,
  //         text: input
  //       }),
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     },
  //     () => setRerender(!rerender)
  //   );
  // };
​
  //optativo: instanciar variables de estado de redux//
​
  const createComment = input => {
    getData(
      `/api/itineraries/byTitle/${title}/comments`,
      {
        method: "PUT",
        body: JSON.stringify({
          username: /*user (traido desde el store de redux)*/,
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
​
  const deleteComment = id => {
    getData(
      `/api/itineraries/byTitle/${title}/comments/delete`,
      {
        method: "DELETE",
        body: JSON.stringify({
          id: id
        }),
        headers: {
          "Content-Type": "application/json"
        }
      },
      () => setRerender(false)
    );
  };
​
  const callbackRerender = value => {
    setRerender(value)
  };
​
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    getData(`/api/itineraries/byTitle/${title}/comments`, null, data =>  {
      setPosts(
        data.comments[0].comments.map((comment, index) => (
          <Fragment>
              {/*pasar por props si estás loggeado, para condicionar el render de "edit" */}
          <CommentItem
            key={`key#${title}#${index}`}
            cantidad={cantidad}
            title={title}
            username={comment.username}
            text={comment.text}
            id={comment.id}
            callback={callbackRerender}
​
          />
          {/* renderizar condicionalmente si estas loggeado*/}
          <button onClick={() => {setRerender(!rerender); deleteComment(comment.id)}}>Delete</button>
​
  
          </Fragment>
        ))
      );
      setCantidad(data.cantidad);
​
      console.log(data.comments[0].comments);
      console.log(data.cantidad);
    });
  }, [!rerender]);
​
  return (
    <div>
      <div>
        {posts}
{/*condicionar el render del comment input en funcion de que el usuario esté loggeado (usar el state de redux)  */}
        <CommentInput
          cantidad={cantidad}
          title={title}
          callback={createComment}
          placeholder={"Leave your comment"}
        ></CommentInput>
​
        <div id="likeAdder"></div>
        <ul id="comments">
          {comments.map(comment => <li color="#fff">{comment}</li>) || comments}
        </ul>
      </div>
    </div>
  );
};
export default Comments;