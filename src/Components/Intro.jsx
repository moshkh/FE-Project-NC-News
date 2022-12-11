import { useEffect, useState, useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../api";
import { formatDate } from "../utils/formatDate";
import Articles from "./Articles";

const Intro = () => {
  const [recentArticles, setRecentArticles] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      setRecentArticles([res[0], res[1]]);
    });
  }, []);

  console.log(recentArticles);

  return (
    <main className="homepage">
      <h2>Welcome to the NC News Homepage</h2>
      <h3>Breaking News!</h3>
      <p>
        This is a mock news / blog site which is a portfolio piece to showecase
        my front-end skills, I have built this site with react.js. The repo for
        this project is publically accessible{" "}
        <a href="https://github.com/moshkh/fe-project-nc-news">here</a>
      </p>
      <p>
        I've built a back-end project which includes a RESTful api to accompany
        this site.The back-end has a database, feature rich working API
        endpoints, all of which is fully hosted online. You can view the repo
        for the back-end{" "}
        <a href="https://github.com/moshkh/BE-Project-NC-News">here</a>
      </p>
      <p>
        By moshkh - checkout my{" "}
        <a href="https://www.linkedin.com/in/musab-hussain-229918250/">
          LinkedIn
        </a>{" "}
        to find out more about me or to contact me
      </p>
      <h3>Most Recent Articles</h3>
      <ul className="homepage--recent-articles-list">
        {recentArticles.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h3>{article.title}</h3>
              </Link>
              <p>Topic: {article.topic}</p>
              <p>Author: {article.author}</p>
              <p>Date Posted: {formatDate(article.created_at)}</p>
              <p>Comments: {article.comment_count}</p>
              <p>Votes: {article.votes}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Intro;
