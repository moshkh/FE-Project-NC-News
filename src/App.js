import "./CSS/App.css";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Nav from "./Components/Nav";
import { Routes, Route, useParams } from "react-router-dom";
import { UserContext } from "./context/user.context";
import { useState } from "react";
import Articles from "./Components/Articles";
import CurrentUser from "./Components/CurrentUser";
import Topics from "./Components/Topics";
import UserBar from "./Components/UserBar";

function App() {
  const [currUser, setCurrUser] = useState("tickle122");
  const [topic, setTopic] = useState("");

  return (
    <UserContext.Provider value={{ currUser, setCurrUser }}>
      <div>
        <Header />
        <Nav />
        <UserBar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/:user" element={<CurrentUser />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
