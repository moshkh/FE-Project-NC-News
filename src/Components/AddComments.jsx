import { useState } from "react";

export const AddComment = ({ articleId }) => {
  const [newComment, setNewComment] = useState();
  const [commentInput, setCommentInput] = useState("");

  const handleCommentInput = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    
  };

  console.log(newComment);

  return (
    <form className="add-comment" onSubmit={handleCommentSubmit}>
      <label htmlFor="comment-input">Add a comment:</label>
      <input
        id="comment-input"
        type="text"
        onChange={handleCommentInput}
        placeholder="enter your comment here..."
        value={commentInput}
      />
      <button type="submit">Post Comment</button>
    </form>
  );
};
