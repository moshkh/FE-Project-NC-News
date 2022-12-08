import { useState } from "react";
import { postCommentToArticle } from "../api";
import "../CSS/AddComments.css";

export const AddComment = ({ articleId, comments, currUser, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [buttonText, setButtonText] = useState("Post Comment");
  const [err, setErr] = useState({ msg: "" });
  const [commentId, setCommentId] = useState(0);

  const handleCommentInput = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (!newComment) {
      return setErr({ msg: "Invalid comment" });
    }
    const date = new Date();
    const commentSubmitted = {
      comment_id: "",
      author: currUser,
      body: newComment,
      created_at: date.toString(),
      votes: 0,
    };
    setCommentId((currCommentId) => {
      commentSubmitted.comment_id = currCommentId - 1;
      return currCommentId - 1;
    });

    setComments((currComments) => {
      return [commentSubmitted, ...currComments];
    });

    //removed newComment as a parameter to the below function to help deal with err
    //currently trying to reverse the optimistic render
    //having difficulty finding a way to capture the rendering comment
    //can I do it via a useEffect?
    postCommentToArticle(articleId, currUser).catch((err) => {
      const commentToRemove = comments.find((comment) => {
        if (comment.comment_id === commentId - 1) {
          return comment;
        }
      });
      console.log(commentToRemove);
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
