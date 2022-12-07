import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news.cyclic.app/api",
});

export const getArticles = () => {
  return ncNewsApi.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};

export const getArticleById = (article_id) => {
  return ncNewsApi
    .get(`/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getArticleComments = (article_id) => {
  return ncNewsApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const patchArticleVote = (article_id, voteQty) => {
  return ncNewsApi
    .patch(`/articles/${article_id}`, { inc_votes: voteQty })
    .then(
      ({
        data: {
          article: { votes },
        },
      }) => {
        return votes;
      }
    );
};

export const postCommentToArticle = (article_id, username, commentToPost) => {};
