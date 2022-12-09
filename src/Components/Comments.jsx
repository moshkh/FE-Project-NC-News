import { formatDate } from "../utils/formatDate";
import "../CSS/Comments.css";

const Comments = ({ comments, currUser }) => {
  const handleDeleteClick = (event) => {
    //delete comment here
    //have access to event.target.id
    // console.log(event.target.id)
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
              <button id={comment.comment_id} onClick={handleDeleteClick}>
                Delete comment
              </button>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
