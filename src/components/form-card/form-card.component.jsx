import { useState, useEffect } from "react";
import "./form-card.styles.css";
import { MdSave } from "react-icons/md";

const FormCard = (props) => {
  //-------------------declaration of all varriables-----------------------------------------------------------------------------

  const [idea, setIdea] = useState({
    title: "",
    description: "",
  });

  const [count, setCount] = useState(0);

  //-------------------- functions-----------------------------------------------------------------------------------------------

  const counterColorChange = {
    color: count >= 100 ? "red" : "black", //Change text color when character count gets to 100
    visibility: count >= 100 ? "visible" : "hidden", //Make count visible when character count gets to 100
  };

  //   handle changes in the input fields
  const handleChange = (e) => {
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

  const saveIdea = (e) => {
    e.preventDefault();

    if (idea.title.length > 0 && idea.description.length > 0) {
      //Making sure we do not have empty values for both title and description
      setCount(0);
      setIdea({
        title: "",
        description: "",
      });
      props.onSubmit(idea);
    } else {
      alert("Please enter information to both inputs");
    }
  };
  //----------------------html-----------------------------------------------------------------------------------------------------
  return (
    <form onSubmit={saveIdea} className="card-container">
      <h2>Create New Card</h2>
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
          placeholder="Enter your idea descrption"
        />
      </div>
      <div className="btnContainer">
        {/* <button type="submit">Save</button> */}
        <MdSave className="btnSave" onClick={saveIdea}/>
      </div>
      <p style={counterColorChange}>{count}/140</p>
    </form>
  );
};

export default FormCard;
