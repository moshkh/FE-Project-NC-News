import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <main>
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
    </main>
  );
};

export default Intro;
