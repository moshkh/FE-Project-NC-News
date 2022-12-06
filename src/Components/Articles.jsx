import { useEffect, useState } from "react";
import { getArticles } from "../api";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [articleIdClicked, setArticleIdClicked] = useState();

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
    });
  }, []);

  //title
  //topic
  //author
  //date
  //votes
  //comments

  return (
    <main>
      <h2>All Articles</h2>
      <ul>
        {articles.map((article)=>{
        return  <li key={article.article_id}>
            <h3>{article.title}</h3>
            <p>Topic: {article.topic}</p>
            <p>Author: {article.author}</p>
            <p>Date Posted: {article.created_at}</p>
            <p>Comments: {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
          </li>
        })}
      </ul>
    </main>
  );
};

export default Articles;
