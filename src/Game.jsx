import React from 'react';
import {Board} from './Board';

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: Array.from(Array(12).keys())
        }
    }

    deleteCard = (cardId) => {
        const cards = this.state.cards.slice();
        // console.log(cards)
        // console.log(cardId)
        const location = cards.findIndex(x => x === cardId);
        // console.log(location)
        cards.splice(location, 1);
        this.setState({cards: cards});
    }

    render () {
        console.log(this.state)
        return(
            <div>
                <Board cards={this.state.cards} deleteCard={this.deleteCard} />
            </div>
        )
    }
}