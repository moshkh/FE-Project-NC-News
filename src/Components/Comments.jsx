import { formatDate } from "../utils/formatDate";
import "../CSS/Comments.css";
import { deleteComment } from "../api";
import { useState } from "react";

const Comments = ({ comments, currUser, setCommentDeleted }) => {
  const [err, setErr] = useState({ msg: "" });
  const [disable, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState("Delete comment");
  const [commentId, setCommentId] = useState();

  const handleDeleteClick = (event) => {
    const commentId = event.target.id;
    setDisable(true);
    setButtonText("Deleting...");
    deleteComment(commentId)
      .then(() => {
        setCommentDeleted(true);
        setDisable(false);
        setButtonText("Delete Comment");
      })
      .catch((err) => {
        setErr({ msg: "Oops something went wrong - try deleting again!" });
        setDisable(false);
      });
  };

  return (
    <ul className="comments">
      {comments.map((comment) => {
        return (
          <li className="comments--single-comment" key={comment.comment_id}>
            <h4>Comment by {`${comment.author}`}</h4>
            <p>Comment: {comment.body}</p>
            <p>Comment Posted: {formatDate(comment.created_at)}</p>
            <p>Comment Votes: {comment.votes}</p>
            {comment.author === currUser ? (
              <button
                className="comments--single-comment--delete-button"
                id={comment.comment_id}
                onClick={handleDeleteClick}
                disabled={disable}
              >
                {buttonText}
              </button>
            ) : null}
            <p>{err.msg ? err.msg : null}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
