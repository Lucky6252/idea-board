import { useState } from "react";
import "./form-card.styles.css";
import { MdSave } from "react-icons/md";
import { CardType } from "../card-list/card-list.component";
import { ChangeEvent } from "react";
import { FormEvent } from "react";
import { CSSProperties } from "react";

type PropsType = {
  onSubmit: (Card: CardType) => void;
};

const FormCard = ({ onSubmit }: PropsType) => {
  //-------------------declaration of all varriables-----------------------------------------------------------------------------

  const [idea, setIdea] = useState({
    title: "",
    description: "",
  });

  const [count, setCount] = useState(0);

  //-------------------- functions-----------------------------------------------------------------------------------------------

  const counterColorChange: CSSProperties = {
    color: "red",
    visibility: count >= 100 ? "visible" : "hidden", //Make count visible when character count gets to 100
  };

  //   handle changes in the input fields
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "description") {
      //Check if we are changing description to keep control of count
      setCount(value.length);
      setIdea((prev) => {
        return { ...prev, [name]: value };
      });
    } else {
      setIdea((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };

  const saveIdea = (e: FormEvent) => {
    e.preventDefault();

    if (idea.title.length > 0 && idea.description.length > 0) {
      //Making sure we do not have empty values for both title and description
      setCount(0);
      setIdea({
        title: "",
        description: "",
      });
      onSubmit(idea);
    } else {
      alert("Please enter information to both inputs");
    }
  };
  //----------------------html-----------------------------------------------------------------------------------------------------
  return (
    <form onSubmit={saveIdea} className="card-container">
      <h2>Create New Idea Card</h2>
      <div className="title-container">
        <label>Title:</label>
        <input
          name="title"
          value={idea.title}
          onChange={handleChange}
          placeholder="Enter your idea title"
        />
      </div>

      <div className="desc-container">
        <label>Description:</label>
        <textarea
          className="description-input"
          name="description"
          value={idea.description}
          onChange={handleChange}
          maxLength={140}
          rows={5}
          cols={35}
          placeholder="Enter your idea descrption. Note it only takes 140 characters"
        />
      </div>
      <div className="btnContainer">
        <p className="countLabel" style={counterColorChange}>
          {count}/140
        </p>
        <MdSave className="btnSave" onClick={saveIdea} />
      </div>
    </form>
  );
};

export default FormCard;
