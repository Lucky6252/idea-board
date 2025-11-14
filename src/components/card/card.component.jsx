import "./card.styles.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="text-container">
        <div className="title-container">
          <h2>Title</h2>
        </div>
        <div className="desc-container">
          <p>
            Description
          </p>
        </div>
      </div>
      <div className="btn-container">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Card;
