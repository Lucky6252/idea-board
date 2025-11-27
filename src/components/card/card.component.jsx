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

  useEffect(() => {
    if(ideas){
      localStorage.setItem('ideas',JSON.stringify(ideas))
    }
    

  }, [ideas]);

  const buttonHandle = (i) => {
    console.log(`The index given is ${i}`);
    if (ideas) {
      const notRemoved = ideas.filter((idea, index) => index !== i);
      setIdeas(notRemoved);
      
      
    }
  }
  
  console.log(ideas);

  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p>{description}</p>

      <button onClick={() => buttonHandle(idx)}>delete</button>
    </div>
  );
};

export default Card;
