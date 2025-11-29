import Card from "../card/card.component";
import FormCard from "../form-card/form-card.component";
import "./card-list.styles.css";
import { useState, useEffect } from "react";

const CardList = () => {
  //------------------------------------------- declaration of all values ----------------------------------------------------
  
  const [cards, setICards] = useState();

  //----------------------------------------------------useEffects ------------------------------------------------------------
  
  useEffect(() => {
    const data = localStorage.getItem("ideas");//get data from our localStorage database
    if (data) {
      setICards(JSON.parse(data));
    }
  }, []);//Runs only first time the page render

  useEffect(() => {
    if (cards) {
      localStorage.setItem("ideas", JSON.stringify(cards));//Updates our localStorage database with updated valus
    }
  }, [cards]);//Runs when card value is updated

  //---------------------------------------------------- Functions --------------------------------------------------------------
  
  
  const cardRemoved = (cardID) => {//Removes a card
    if (cards) {
      const notRemoved = cards.filter((idea, index) => index !== cardID);
      if(notRemoved){
        setICards(notRemoved);
      }
      
    }
  };

  const addCard = (idea) => {//Add idea as a card
     if (idea.title.length > 0 && idea.description.length > 0) {
      setICards((prev)=>[...prev, idea])
      
    } else {
      alert("New idea from Form Card is came empty");
    }

  }

  //---------------------------------------------------- Returned HTML ----------------------------------------------------------

  return (
    <div className="card-list-container">
      {cards && cards.map(({ title, description }, idx) => {
        return (
          <Card
            key={`${title}-${idx}`}
            title={title}
            description={description}
            idx={idx}
            onRemove={() => cardRemoved(idx)}
          />
        );
      })}
      <FormCard onSubmit={addCard}/>
    </div>
  );
};

export default CardList;
