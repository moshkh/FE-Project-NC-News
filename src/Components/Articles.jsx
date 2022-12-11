import { useEffect, useState } from "react";
import { getArticles } from "../api";
import "../CSS/Articles.css";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import SortBy from "./SortBy";
import OrderBy from "./OrderBy";

const Articles = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState();
  const [orderBy, setOrderBy] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const { topicname } = useParams();

  useEffect(() => {
    if (!sortBy && !orderBy) {
      setSearchParams({ sort_by: "created_at", order_by: "DESC" });
    } else {
      setSearchParams({ sort_by: sortBy, order_by: orderBy });
    }
    getArticles(topicname, sortBy, orderBy)
      .then((res) => {
        setArticles(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topicname, sortBy, orderBy]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="articles">
      <h2 className="articles-header">
        {topicname ? `Articles on ${topicname}` : "All Articles"}
      </h2>
      <div className="articles--sort-by">
        <SortBy setSortBy={setSortBy} />
      </div>
      <div className="articles--order-by">
        <OrderBy setOrderBy={setOrderBy} />
      </div>
      <ul className="articles--list">
        {articles.map((article) => {
          return (
            <li className="articles-list-item" key={article.article_id}>
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

export default Articles;
