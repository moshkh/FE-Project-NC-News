import { useEffect, useState } from "react";
import { getArticles } from "../api";
import "../CSS/Articles.css";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import SortBy from "./SortBy";
import OrderBy from "./OrderBy";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { topicname } = useParams();

  //declare useSearchParams here and pass as a prop to SortBy and OrderBy Components?
  useEffect(() => {
    getArticles(topicname)
      .then((res) => {
        setArticles(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topicname]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="articles">
      <h2 className="articles-header">
        {topicname ? `Articles on ${topicname}` : "All Articles"}
      </h2>
      <SortBy className="articles-sort_by" />
      <OrderBy className="articles-order_by" />
      <ul className="articles-list">
        {articles.map((article) => {
          return (
            <li className="articles-list-item" key={article.article_id}>
              <Link to={`/articles/viewarticle/${article.article_id}`}>
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

export default Articles;
