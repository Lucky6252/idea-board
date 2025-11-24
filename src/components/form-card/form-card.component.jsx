import { useState } from "react";
import './form-card.styles.css'


const FormCard = () => {

    const[description, setDescription] = useState('');
    const redZone = 100;

    const handleChange = (event) => {

         setDescription(event.target.value);
    }

    const counterColorChange = {
        color: description.length >= redZone ? 'red' : 'black',
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
                maxLength={140}
                rows={10}
                cols={50}
                placeholder="Enter your idea descrption"/>
            </div>
            <p style={counterColorChange} className="">{description.length}/140</p>
            
        </div>
    );
}

export default FormCard;