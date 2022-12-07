import { useEffect, useState } from "react";
import { getArticleById, patchArticleVote } from "../api";
import "../CSS/VoteCounter.css";

const VoteCounter = ({ article_id }) => {
  const [voteCount, setVoteCount] = useState("");
  const [incVote, setIncVote] = useState(0);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getArticleById(article_id).then(({ votes }) => {
      setVoteCount(votes);
    });
  }, []);

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
        setErr("Vote did not register, please refreh and try again");
      });
  }, [incVote]);

  const handleVoteClick = (event) => {
    if (event.target.innerText === "Vote Down 👎") {
      setIncVote(-1);
      setVoteCount((currVotes) => (currVotes -= 1));
    } else {
      setIncVote(1);
      setVoteCount((votes) => (votes += 1));
    }
  };

  console.log(incVote);

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
