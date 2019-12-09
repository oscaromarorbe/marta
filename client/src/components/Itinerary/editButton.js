import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { getData } from "../../store/actions/reduxFetch";
// import CommentInput from "./commentInput";


export const EditButton = ({ title, cantidad, placeholder }) => {
  const [textbox, setTextbox] = useState();
  const [textInput, setTextInput] = useState();

  const updateComment = () => {
    
      getData(
        `/api/itineraries/byTitle/${title}/comments/update`,
        {
          method: "PUT",
          body: JSON.stringify({
            id: `${title}#${cantidad}`,
            text: textInput
          }),
          headers: {
            "Content-Type": "application/json"
          }
        },
        null
      );
    
  };
  return (
    <Fragment>
      <button
        onClick={setTextbox(
          <Form.Group className="row p-2">
            <Form.Control
              onChange={e => setTextInput(e.target.value)}
              id="comments"
              type="text"
              placeholder={placeholder}
              width="10em"
            ></Form.Control>
            <Button
              variant="primary"
              type="submit"
              onClick={() => updateComment()}
            >
              SEND
            </Button>
          </Form.Group>
        )}
      >
        Edit
      </button>
      {textbox}
    </Fragment>
  );
};