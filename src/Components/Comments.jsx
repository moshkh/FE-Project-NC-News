const Comments = ({ comments }) => {
  return (
    <ul className="comments">
      {comments.map((comment) => {
        console.log(comment);
        return (
          <li className="comments--single-comment" key={comment.comment_id}>
            <h4>Comment by {`${comment.author}`}</h4>
            <p>Comment: {comment.body}</p>
            <p>Comment Date: {comment.created_at}</p>
            <p>Comment Votes: {comment.votes}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
