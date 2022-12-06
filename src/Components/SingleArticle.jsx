import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState();

  //get comments for each article

  useEffect(() => {
    getArticleById(article_id).then((res) => {
      setArticle(res);
      setLoading(false);
    });
  }, [article_id]);

  console.log(article);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <article>
        <h2>{article.title}</h2>
        <h3>{article.topic}</h3>
        <h3>{article.author}</h3>
        <p>{article.body}</p>
        <h4>{article.created_at}</h4>
      </article>
    </main>
  );
};

export default SingleArticle;
