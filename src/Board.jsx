import {Card} from './Card';

export function Board(props) {
    console.log(props.cards)
    return (
        <>
            <div>This is a board</div>
            {
                props.cards.map((card, i) => {
                    return (<Card key={`${card}-${i}-card`} deleteCard={props.deleteCard} takeTurn={props.takeTurn} value={card} />)
                })
            }
        </>
    )
}