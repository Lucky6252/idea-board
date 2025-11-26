import Head from "./components/head/head.component";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [ideasList, setIdeasList] = useState([]);

  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("ideas");
    if (data) {
      setIdeas(JSON.parse(data));
    }
  }, []);

  console.log(ideas);

  return (
    <div className="App">
      <Head />
      <CardList ideas={ideas} />
    </div>
  );
}

export default App;
