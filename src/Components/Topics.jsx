import { useState } from "react";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [loading, isLoading] = useState(false);


  // api call for topics
  // export const getTopics = () => {
  //   return ncNewsApi.get("/topics").then((data) => {
  //     console.log(data);
  //   });
  // };

  return (
    <main>
      <h2>Topics</h2>
      <p>Topics from API go here</p>
    </main>
  );
};

export default Topics;
