import { useState } from "react";
import './form-card.styles.css'


const FormCard = () => {


    const[description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [idea, setIdea] = useState({});
    const redZone = 100;

    const descriptionChange = (event) => {
         setDescription(event.target.value);
    }

    const titleChange = (event) => {
        setTitle(event.target.value);
        }

    const counterColorChange = {
        color: description.length >= redZone ? 'red' : 'black',
    }

    const addIdea = () => {
        if(description.length != 0 || title.length != 0){
            const newIdea = {
                title: title,
                description: description
            };
            setIdea(newIdea)
            console.log(JSON.stringify(newIdea));
        }
        
        
    }

    const checkingValues = () => {
        console.log(idea);
    }


    return(
        <div className="card-container">
            <h2>Create New Card</h2>
            <div className="title-container">
                <label>Title:</label>
                <input value={title} onChange={titleChange} placeholder="Enter your idea title"/>
            </div>
             <div className="desc-container">
                <label>Description:</label>
                <textarea 
                className="description-input"
                value={description} 
                onChange={descriptionChange}
                maxLength={140}
                rows={8}
                cols={50}
                placeholder="Enter your idea descrption"/>
            </div>
            <div className="btnContainer">
                <button onClick={addIdea}>Save</button>
                <button onClick={checkingValues}>Check</button>
            </div>
            <p style={counterColorChange} className="">{description.length}/140</p>
            
            
        </div>
    );
}

export default FormCard;