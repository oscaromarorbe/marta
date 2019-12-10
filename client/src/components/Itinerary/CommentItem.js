import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { getData } from "../../store/actions/reduxFetch";
import CommentInput from "./commentInput";

export const CommentItem = ({
  username,
  text,
  id,
  title,
  cantidad,
  callback
}) => {
  const [lastcomment, setLastcomment] = useState(text);
  const [element, setElement] = useState();
  const [rerender, setRerender] = useState(false);

  const updateComment = input => {
    console.log("update comment");
    console.log(id);
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
        setElement(regularInput);
        setLastcomment(res);
        console.log(lastcomment);
      }
    );
  };
  // const deleteComment = target => {
  //   getData(
  //     `/api/itineraries/byTitle/${title}/comments/delete`,
  //     {
  //       method: "PUT",
  //       body: JSON.stringify({
  //         id: target
  //       }),
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     },
  //     () => callback(false)
  //   );
  // };

  const regularInput = (
    <div>
      <span>{lastcomment}</span>
      <button
        onClick={() => {
          setElement(editInput);
          console.log(id);
        }}
      >
        Edit
      </button>
    </div>
  );

  const seElementRernderandLastComment = input => {
    if (input != null) {
      setLastcomment(input);
      setRerender(true);
    }
    setElement(regularInput);
  };
  const editInput = (
    <div className="row justify-content-center">
      <CommentInput
        cantidad={cantidad}
        title={title}
        placeholder={lastcomment}
        callback={seElementRernderandLastComment}
        id={id}
      ></CommentInput>
      <button
        onClick={() => {
          setElement(regularInput);
        }}
      >
        Back
      </button>
    </div>
  );

  useEffect(() => {
    setElement(regularInput);
    updateComment(lastcomment);
  }, [!rerender]);

  return (
    <Fragment>
      <h6>{username}</h6>
      {element}
    </Fragment>
  );
};
