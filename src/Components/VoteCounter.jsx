import { useEffect, useState } from "react";
import { getArticleById, patchArticleVote } from "../api";
import "../CSS/VoteCounter.css";

const VoteCounter = ({ articleId }) => {
  const [voteCount, setVoteCount] = useState("");
  const [incVote, setIncVote] = useState(0);
  const [err, setErr] = useState(null);
  const [voteUpDisabled, setVoteUpDisabled] = useState(null);
  const [voteDownDisabled, setVoteDownDisabled] = useState(null);

  useEffect(() => {
    getArticleById(articleId).then(({ votes }) => {
      setVoteCount(votes);
    });
  }, [articleId]);

  useEffect(() => {
    if (voteCount === 0) {
      setVoteDownDisabled(true);
    }
  }, [voteCount]);

  useEffect(() => {
    patchArticleVote(articleId, incVote)
      .then(() => {
        setIncVote(0);
      })
      .catch((err) => {
        setVoteCount((currVotes) => {
          if (incVote === -1) {
            currVotes += 1;
          } else {
            currVotes -= 1;
          }
        });
        setErr("Votes did not update, please refresh and try again");
      });
  }, [incVote]);

  const handleVoteClick = (event) => {
    if (event.target.innerText === "Vote Down 👎") {
      setIncVote(-1);
      setVoteCount((currVotes) => (currVotes -= 1));
      setVoteDownDisabled(true);
      setVoteUpDisabled(false);
    } else {
      setIncVote(1);
      setVoteCount((currVotes) => (currVotes += 1));
      setVoteDownDisabled(false);
      setVoteUpDisabled(true);
    }
  };

  return err ? (
    <p className="vote-counter--err">{err}</p>
  ) : (
    <section className="vote-counter">
      <p>Article Votes: {voteCount}</p>
      <button
        className="vote-counter--button--vote-down"
        onClick={handleVoteClick}
        disabled={voteDownDisabled}
      >
        Vote Down 👎
      </button>
      <button
        className="vote-counter--button--vote-down"
        onClick={handleVoteClick}
        disabled={voteUpDisabled}
      >
        Vote Up 👍
      </button>
    </section>
  );
};

export default VoteCounter;
