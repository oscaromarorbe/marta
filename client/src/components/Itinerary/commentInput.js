import React from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { useState } from "react";
// import { getData } from "../../store/actions/reduxFetch";

export default function CommentInput({
//   title,
  callback,
//   cantidad,
  placeholder
}) {
  const [textInput, setTextInput] = useState();

  return (
    <form>
      <input
        onChange={e => {
          setTextInput(e.target.value);
        }}
        id="comments"
        type="text"
        placeholder={placeholder}
        value={textInput}
        width="10em"
      ></input>
      <button
        variant="primary"
        type="submit"
        onClick={
          (event) => {
            event.preventDefault();
            event.stopPropagation();
            callback(textInput);
          }
        }
      >
        Send
      </button>
    </form>
  );
}