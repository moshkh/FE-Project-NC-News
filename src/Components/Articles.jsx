import { useEffect, useState } from "react";
import { getArticles } from "../api";
import "../CSS/Articles.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [articleIdClicked, setArticleIdClicked] = useState();

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
    });
  }, []);

  return (
    <main className="articles">
      <h2 className="articles-header">All Articles</h2>
      <ul className="articles-list">
        {articles.map((article) => {
          return (
            <li className="articles-list-item" key={article.article_id}>
              <h3>{article.title}</h3>
              <p>Topic: {article.topic}</p>
              <p>Author: {article.author}</p>
              <p>Date Posted: {article.created_at}</p>
              <p>Comments: {article.comment_count}</p>
              <p>Votes: {article.votes}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
