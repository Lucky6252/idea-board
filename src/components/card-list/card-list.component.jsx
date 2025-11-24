import Card from "../card/card.component";
import FormCard from "../form-card/form-card.component";
import './card-list.styles.css'

const CardList = ({ideaCards}) => {
    return (
        <div className="card-list-container">
        {ideaCards.map(({title, description, id}, idx)=>{
            return (
                <Card key={`${title}-${idx}`} title={title} description={description} id={id}/>
            )
        })}
        <FormCard/>
        </div>
    );
}

export default CardList;