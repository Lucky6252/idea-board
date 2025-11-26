import { useEffect, useState } from "react";
import "./card.styles.css";

const Card = ({ title, description, idx }) => {


  const [ideas, setIdeas] = useState();

  useEffect(() => {
    const data = localStorage.getItem("ideas");
    if (data) {
      setIdeas(JSON.parse(data));
    }
  }, []);

  const removeIdea = () => {
    //console.log(ideas.length);
    // const notRemoved = ideas.map(() => {console.log('works');})
    //setIdeas(notRemoved);
    //console.log(notRemoved);
  };
  //console.log(ideas.length);
  //console.log(ideas);

  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p>{description}</p>

      <button onClick={removeIdea()}>delete</button>
    </div>
  );
};

export default Card;
