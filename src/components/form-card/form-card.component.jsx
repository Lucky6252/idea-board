import { useState } from "react";
import './form-card.styles.css'


const FormCard = () => {

    const[description, setDescription] = useState('');

    const handleChange = (event) => {
        setDescription(event.target.value);
    }


    return(
        <div className="card-container">
            <h2>Create New Card</h2>
            <div className="title-container">
                <label>Title:</label>
                <input placeholder="Enter your idea title"/>
            </div>
             <div className="desc-container">
                <label>Description:</label>
                <textarea 
                className="description-input"
                value={description} 
                onChange={handleChange}
                rows={10}
                cols={50}
                placeholder="Enter your idea descrption"/>
            </div>
            <p>{description.length}/140</p>
        </div>
    );
}

export default FormCard;