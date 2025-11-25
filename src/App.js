import Head from "./components/head/head.component";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import { useEffect, useState } from "react";
import { DataFromLocalStorage } from "./utils/hooks.component";


function App() {

  const [ideas, setIdeas] = useState(() => {
    const localStorageData = localStorage.getItem('ideas')
    if(localStorageData){
      return JSON.parse(localStorageData);
    }
  });

  // useEffect(()=>{
  //   setIdeas(DataFromLocalStorage)
  // }, []);

console.log(ideas);


  return (
    <div className="App">
      <Head/>
      <CardList ideaCards={ideas}/>
    </div>
  );
}

export default App;
