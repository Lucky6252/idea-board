import Card from "../card/card.component";
import FormCard from "../form-card/form-card.component";
import "./card-list.styles.css";
import { useState, useEffect } from "react";
import Popup from "../popup/popup.component";
import { ChangeEvent } from "react";

const CardList = () => {
  type CardType = {
    title: string;
    description: string;
  };

  const DefaultCardValues: CardType[] = [
    {
      title: "",
      description: "",
    },
  ];

  //------------------------------------------- declaration of all values ----------------------------------------------------

  const [cards, setICards] = useState<CardType[]>(DefaultCardValues);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [editedText, setEditedTex] = useState<CardType>({
    title: "",
    description: "",
  });
  const [editedID, setEditedID] = useState<number | null>(null);
  const [count, setCount] = useState<number>(0);

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

  const cardRemoved = (cardID: number) => {
    //Removes a card
    if (cards) {
      const notRemoved = cards.filter((idea, index) => index !== cardID);
      if (notRemoved) {
        setICards(notRemoved);
      }
    }
  };

  const editCard = (cardID: number) => {
    const foundCard = cards[cardID];
    // if (cards) {
    //   setEditedTex(cards.find((_, index) => index === cardID));
    // }

    if (!foundCard) return;
    setEditedID(cardID);
    setEditedTex(foundCard);
    setShowPopup(true);
  };

  const savePopup = () => {
    if (cards) {
      const newData = cards.map((item, index) => {
        if (index === editedID && editedText) {
          return {
            title: editedText.title,
            description: editedText.description,
          };
        }
        return item;
      });
      setICards(newData);
      setShowPopup(false);
    }
  };

  const cancelEdit = () => {
    setShowPopup(false);
  };

  const addCard = (idea: CardType) => {
    //Add idea as a card
    if (idea.title.length > 0 && idea.description.length > 0) {
      setICards((prev) => [...prev, idea]);
    } else {
      alert("New idea from Form Card is came empty");
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "description") {
      //Check if we are changing description to keep control of count
      setCount(value.length);
      if (editedText) {
        setEditedTex((prev) => {
          return { ...prev, [name]: value };
        });
      }
    } else {
      setEditedTex((prev) => {
        return { ...prev, [name]: value };
      });
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
              onRemove={() => cardRemoved(idx)}
              onEdit={() => editCard(idx)}
            />
          );
        })}
      <FormCard onSubmit={addCard} />
      {showPopup && (
        <Popup onSave={savePopup} onCancel={cancelEdit}>
          <h2>Edit an Idea Card</h2>
          <div className="title-container">
            <label>Title:</label>
            <input
              name="title"
              required
              value={editedText.title}
              onChange={handleChange}
            />
          </div>
          <div className="desc-container">
            <label>Description:</label>
            <textarea
              required
              className="description-input"
              name="description"
              value={editedText.description}
              onChange={handleChange}
              maxLength={140}
              rows={8}
              cols={50}
            />
          </div>
        </Popup>
      )}
    </div>
  );
};

export default CardList;
