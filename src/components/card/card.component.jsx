import "./card.styles.css";

const Card = ({title, description, id}) => {
  return (
    <div className="card-container">
     <h2>{title}</h2>
     <p>{description}</p>
    </div>
  );
};

export default Card;
