import Card from "../card/card.component";
import FormCard from "../form-card/form-card.component";
import "./card-list.styles.css";
import { useState, useEffect } from "react";

const CardList = () => {
  const [cards, setICards] = useState();

  useEffect(() => {
    const data = localStorage.getItem("ideas");
    if (data) {
      setICards(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (cards) {
        console.log('In useEffect monitoring cards')
      localStorage.setItem("ideas", JSON.stringify(cards));
    }
  }, [cards]);

  const cardRemoved = (cardID) => {
    if (cards) {
      const notRemoved = cards.filter((idea, index) => index !== cardID);
      if(notRemoved){
        setICards(notRemoved);
      }
      
      //console.log(notRemoved);
    }
  };
  console.log(cards)

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
      <FormCard />
    </div>
  );
};

export default CardList;
