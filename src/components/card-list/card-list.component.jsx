import Card from "../card/card.component";
import FormCard from "../form-card/form-card.component";
import "./card-list.styles.css";
import { useState, useEffect } from "react";
import Popup from "../popup/popup.component";

const CardList = () => {
  //------------------------------------------- declaration of all values ----------------------------------------------------

  const [cards, setICards] = useState();
  const [showPopup, setShowPopup] = useState(false);

  //----------------------------------------------------useEffects ------------------------------------------------------------

  useEffect(() => {
    const data = localStorage.getItem("ideas"); //get data from our localStorage database
    if (data) {
      setICards(JSON.parse(data));
    }
  }, []); //Runs only first time the page render

  useEffect(() => {
    if (cards) {
      localStorage.setItem("ideas", JSON.stringify(cards)); //Updates our localStorage database with updated valus
    }
  }, [cards]); //Runs when card value is updated

  //---------------------------------------------------- Functions --------------------------------------------------------------

  const cardRemoved = (cardID) => {
    //Removes a card
    if (cards) {
      const notRemoved = cards.filter((idea, index) => index !== cardID);
      if (notRemoved) {
        setICards(notRemoved);
      }
    }
  };

  const editCard = (cardID) => {
    console.log("We are on edit card");
    console.log(`Card number ${cardID + 1} is being edited`);
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  const addCard = (idea) => {
    //Add idea as a card
    if (idea.title.length > 0 && idea.description.length > 0) {
      setICards((prev) => [...prev, idea]);
    } else {
      alert("New idea from Form Card is came empty");
    }
  };

  //---------------------------------------------------- Returned HTML ----------------------------------------------------------

  return (
    <div className="card-list-container">
      {cards &&
        cards.map(({ title, description }, idx) => {
          return (
            <Card
              key={`${title}-${idx}`}
              title={title}
              description={description}
              idx={idx}
              onRemove={() => cardRemoved(idx)}
              onEdit={() => editCard(idx)}
            />
          );
        })}
      <FormCard onSubmit={addCard} />
      {showPopup && (
        <Popup onClose={closePopup}>
          <h1> This is a title</h1>
          <p>This is its description</p>
        </Popup>
      )}
    </div>
  );
};

export default CardList;
