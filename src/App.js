import "./CSS/App.css";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/user.context";
import { useState } from "react";
import Articles from "./Components/Articles";
import CurrentUser from "./Components/CurrentUser";
import Topics from "./Components/Topics";
import UserBar from "./Components/UserBar";
import SingleArticle from "./Components/SingleArticle";

function App() {
  const [currUser, setCurrUser] = useState("tickle122");

  return (
    <UserContext.Provider value={{ currUser, setCurrUser }}>
      <div className="App">
        <Header className="Header"/>
        <section className="Nav">
        <Nav className="Nav--navbar"/>
        <UserBar className="Nav--userbar"/>
        </section>
        <Routes className="Routes">
          <Route path="/" element={<Intro />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/:user" element={<CurrentUser />} />
          <Route path="/topics/:topicname" element={<Articles />} />
          <Route
            path={`/articles/:article_id`}
            element={<SingleArticle currUser={currUser} />}
          />
          <Route
            path={`/recentarticle/first/:article_id`}
            element={<SingleArticle currUser={currUser} />}
          />
          <Route
            path={`/recentarticle/second/:article_id`}
            element={<SingleArticle currUser={currUser} />}
          />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
