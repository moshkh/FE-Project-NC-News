import { useEffect, useState } from "react";
import { getArticleById, patchArticleVote } from "../api";
import "../CSS/VoteCounter.css";

const VoteCounter = ({ article_id }) => {
  const [voteCount, setVoteCount] = useState("");
  const [incVote, setIncVote] = useState(0);
  const [err, setErr] = useState(null);
  const [voteUpDisabled, setVoteUpDisabled] = useState(null);
  const [voteDownDisabled, setVoteDownDisabled] = useState(null);

  useEffect(() => {
    getArticleById(article_id).then(({ votes }) => {
      setVoteCount(votes);
    });
  }, [article_id]);

  useEffect(() => {
    if (voteCount === 0) {
      setVoteDownDisabled(true);
    }
  }, [voteCount]);

  useEffect(() => {
    patchArticleVote(article_id, incVote)
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
        setErr("Votes did not update, please refreh and try again");
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
      <button onClick={handleVoteClick} disabled={voteDownDisabled}>
        Vote Down 👎
      </button>
      <button onClick={handleVoteClick} disabled={voteUpDisabled}>
        Vote Up 👍
      </button>
    </section>
  );
};

export default VoteCounter;
