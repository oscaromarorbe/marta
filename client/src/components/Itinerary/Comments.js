import React from "react";


const Comments = ({ comments, action }) => {
  return (
    <div>
      <input type="text" placeholder="Leave your comment"/>
      <input type="submit" onClick={action} />
      <div id="likeAdder">
        
      </div>
      <ul id="comments">
        
        {comments.map(comment => (
          <li  color="#fff" >{comment}</li>
        )) || comments} 
        
        
      </ul>
    </div>
  );
};
export default Comments;