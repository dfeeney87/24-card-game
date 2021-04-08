import {Card} from './Card';

export function Board(props) {
    console.log(props.cards)
    return (
        <>
            <div>This is a board</div>
            {
                props.cards.map(card => {
                    return (<Card key={`${card}-card`} deleteCard={props.deleteCard} value={card} />)
                })
            }
        </>
    )
}