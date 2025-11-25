import Card from "../card/card.component";
import FormCard from "../form-card/form-card.component";
import './card-list.styles.css'

const CardList = ({ideas}) => {
    return (
        <div className="card-list-container">
        {ideas.map(({title, description}, idx)=>{
            return (
                <Card key={`${title}-${idx}`} title={title} description={description}/>
            )
        })}
        <FormCard/>
        </div>
    );
}

export default CardList;