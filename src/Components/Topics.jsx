import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTopics } from "../api";
import "../CSS/Topics.css";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="topics">
      <h2>Topics</h2>
      <ul className="topics--list">
        {topics.map((topic) => {
          return (
            <li className="topics--list-item" key={topic.slug}>
              <Link to={`/articles?topic=${topic.slug}`}>
                <h3>{topic.slug}</h3>
              </Link>
              <p>{topic.description}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Topics;
