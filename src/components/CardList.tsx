import type { Card } from '../domain/object/Card';
import CardItem from './CardItem';
import cards from '../assets/data/card-sample.json'

const CardList = () => {

    const getCardList = (): Card[] => {
        return cards as Card[];
    }
    
    const cardList = getCardList();


    return (
        <div className="p-4">
            <ul className="flex flex-wrap justify-start gap-4">
                {cardList.map((card) => (
                    <li key={card.id} className="flex">
                        <CardItem
                            id={card.id}
                            title={card.title}
                            description={card.description}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CardList