import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getArticleComments } from "../api";
import Comments from "./Comments";
import "../CSS/SingleArticle.css";
import VoteCounter from "./VoteCounter";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  getArticleComments(article_id);

  useEffect(() => {
    const articleFetch = getArticleById(article_id).then((res) => {
      setArticle(res);
    });

    const commentsFetch = getArticleComments(article_id).then((res) => {
      setComments(res);
    });

    Promise.all([articleFetch, commentsFetch]).then(() => {
      setLoading(false);
    });
  }, [article_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <article className="single-article">
        <h2>{article.title}</h2>
        <h3>Topic: {article.topic}</h3>
        <h3>Author: {article.author}</h3>
        <p>{article.body}</p>
        <h4>{article.created_at}</h4>
      </article>
      <VoteCounter article_id={article_id} />
      <Comments comments={comments} />
    </main>
  );
};

export default SingleArticle;
