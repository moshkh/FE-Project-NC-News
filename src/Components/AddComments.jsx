import { useState } from "react";
import { postCommentToArticle } from "../api";
import "../CSS/AddComments.css";

export const AddComment = ({ currUser, setComments, articleId }) => {
  const [newComment, setNewComment] = useState("");
  const [buttonText, setButtonText] = useState("Post Comment");
  const [err, setErr] = useState({ msg: "" });

  const handleCommentInput = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (!newComment) {
      return setErr({ msg: "Invalid comment" });
    }
    const date = new Date();
    let commentId = 0;
    const commentSubmitted = {
      comment_id: commentId--,
      author: currUser,
      body: newComment,
      created_at: date.toString(),
      votes: 0,
    };
    setComments((currComments) => {
      return [commentSubmitted, ...currComments];
    });
    
    postCommentToArticle(articleId, currUser).catch((err) => {
      console.log(commentId)
      setButtonText("Post Comment");
      setErr({ msg: "Oops something went wrong - try posting again!" });
    });
    setButtonText("Comment Posted! Post Again?");
    setNewComment("");
    setErr({ msg: "" });
  };

  return (
    <form className="add-comment" onSubmit={handleCommentSubmit}>
      <h4>{err.msg}</h4>
      <label htmlFor="comment-input">Add a comment:</label>
      <textarea
        id="comment-input"
        name="comment-input"
        type="text"
        onChange={handleCommentInput}
        placeholder="enter comment here..."
        value={newComment}
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
};
