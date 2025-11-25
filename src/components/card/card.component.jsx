import "./card.styles.css";

const Card = ({title, description}) => {
  return (
    <div className="card-container">
     <h2>{title}</h2>
     <p>{description}</p>
    </div>
  );
};

export default Card;
