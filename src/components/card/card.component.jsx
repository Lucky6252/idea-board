import "./card.styles.css";

const Card = ({ title, description, onRemove, onEdit }) => {

  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p>{description}</p>

      <button onClick={onRemove}>delete</button>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
};

export default Card;
