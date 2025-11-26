import { useEffect, useState } from "react";
import "./card.styles.css";


const Card = ({title, description, index}) => {
  const [ideas, setIdeas] = useState();

  useEffect(() => {
    const data = localStorage.getItem('ideas');
    if(data){
      setIdeas(JSON.parse(data));
    }
  }, []);

  const removeIdea = (i) => {
    const notRemoved = ideas.filter((_,index) => {
      if(index != i){
        
      }
    })
  }

  return (
    <div className="card-container">
     <h2>{title}</h2>
     <p>{description}</p>

     <button onClick={removeIdea}>delete</button>
    </div>
  );
};

export default Card;
