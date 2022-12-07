import { useEffect, useState } from "react";
import { getArticleById, patchArticleVote } from "../api";
import "../CSS/VoteCounter.css";

const VoteCounter = ({ article_id }) => {
  const [voteCount, setVoteCount] = useState("");
  const [err, setErr] = useState(null);

  useEffect(() => {
    getArticleById(article_id).then(({ votes }) => {
      setVoteCount(votes);
    });
  }, []);

  const handleVoteClick = (event) => {
    if (event.target.innerText === "Vote Down 👎") {
      setVoteCount((currVotes) => (currVotes -= 1));
      patchArticleVote(article_id, -1).catch((err) => {
        setVoteCount((currVotes) => {
          currVotes += 1;
        });
        setErr("Vote did not register, please try again");
      });
    } else {
      setVoteCount((votes) => (votes += 1));
      patchArticleVote(article_id, 1).catch((err) => {
        setVoteCount((currVotes) => {
          currVotes -= 1;
        });
        setErr("Vote did not register, please try again");
      });
    }
  };

  if (err) return <p className="vote-counter--err">{err}</p>;
  return (
    <section className="vote-counter">
      <p>Article Votes: {voteCount}</p>
      <button onClick={handleVoteClick}>Vote Down 👎</button>
      <button onClick={handleVoteClick}>Vote Up 👍</button>
    </section>
  );
};

export default VoteCounter;
