import "./card.styles.css";
import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";


const Card = ({ title, description, onRemove, onEdit }) => {
  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="btn-container">
        <MdDelete className="delete-btn" onClick={onRemove}/>
        <MdEditDocument className="edit-btn" onClick={onEdit}/>
      </div>
    </div>
  );
};

export default Card;
