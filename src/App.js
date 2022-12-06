import "./CSS/App.css";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import { User } from "./context/user";
import { useState } from "react";
import Articles from "./Components/Articles";
import CurrentUser from "./Components/CurrentUser";
import Topics from "./Components/Topics";
import UserBar from "./Components/UserBar";

function App() {
  const [user, setUser] = useState("");
  const [topic, setTopic] = useState("");

  return (
    <User.Provider value={{ user, setUser }}>
      <div>
        <Header />
        <Nav />
        <UserBar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/user" element={<CurrentUser />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </div>
    </User.Provider>
  );
}

export default App;
