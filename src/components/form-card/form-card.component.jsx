import { useState, useEffect } from "react";
import "./form-card.styles.css";

const FormCard = () => {
  // declaration  of all hooks will need
  const [idea, setIdea] = useState({
    title: "",
    description: "",
  });
  const [ideas, setIdeas] = useState([]);
  const [count, setCount] = useState(0);


  //   change colore when count is over 100
  const counterColorChange = {
    color: count >= 100 ? "red" : "black",
  };

  //   handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "description") {
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

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("ideas");
    if (dataFromLocalStorage) {
      setIdeas(JSON.parse(dataFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ideas", JSON.stringify(ideas));
  }, [ideas]);

  const saveIdea = (e) => {
    e.preventDefault();

    if (idea.title.length > 0 && idea.description.length > 0) {
      setIdeas((prev) => [...prev, idea]);
      setCount(0);
      setIdea({
        title: "",
        description: "",
      });
    } else {
      alert("Please enter information to both inputs");
    }
  };

  //console.log(ideas);

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
          rows={8}
          cols={50}
          placeholder="Enter your idea descrption"
        />
      </div>
      <div className="btnContainer">
        <button type="submit">Save</button>
      </div>
      <p style={counterColorChange} className="">
        {count}/140
      </p>
    </form>
  );
};

export default FormCard;
