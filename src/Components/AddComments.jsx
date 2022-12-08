import { useState } from "react";
import { postCommentToArticle } from "../api";
import "../CSS/AddComments.css";

export const AddComment = ({ articleId, currUser, setCommentAdded }) => {
  const [newComment, setNewComment] = useState("");
  const [buttonText, setButtonText] = useState("Post Comment");
  const [disableButton, setDisableButton] = useState(false);
  const [err, setErr] = useState({ msg: "" });

  const handleCommentInput = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (!newComment) {
      return setErr({ msg: "Invalid comment" });
    }
    setDisableButton(true);
    postCommentToArticle(articleId, currUser, newComment)
      .then((res) => {
        setCommentAdded(true);
        setDisableButton(false);
        setButtonText("Comment Posted! Post Again?");
        setNewComment("");
        setErr({ msg: "" });
      })
      .catch((err) => {
        setDisableButton(false);
        setButtonText("Post Comment");
        setErr({ msg: "Oops something went wrong - try posting again!" });
      });
  };

  return (
    <form className="add-comment" onSubmit={handleCommentSubmit}>
      <label htmlFor="comment-input">Add a comment:</label>
      <textarea
        id="comment-input"
        name="comment-input"
        type="text"
        onChange={handleCommentInput}
        placeholder="enter comment here..."
        value={newComment}
      />
      <button type="submit" disabled={disableButton}>
        {buttonText}
      </button>
      <h4>{err.msg}</h4>
    </form>
  );
};
