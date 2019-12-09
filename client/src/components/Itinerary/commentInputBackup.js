import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { getData } from "../../store/actions/reduxFetch";

export default function CommentInput({title, callback, cantidad, placeholder}) {
    const [textInput, setTextInput] = useState();

    return(
        <Form.Group className="row p-2">
        <Form.Control
        
          onChange={e => setTextInput(e.target.value)}
          id="comments"
          type="text"
          placeholder={placeholder}
          value={textInput}
          width="10em"
        ></Form.Control>
        <Button
          variant="primary"
          type="submit"
          onClick={() => callback(textInput)
           /* getData(`/api/itineraries/byTitle/${title}/comments`, {
              method: "PUT",
              body: JSON.stringify({
                username: "Anonymous",
                id: `${title}#${cantidad}`,
                text: textInput
              }),
              headers: {
                "Content-Type": "application/json"
              }
            }, () => callback())*/

          }
        >
          Send
        </Button>
      </Form.Group>
    )
}