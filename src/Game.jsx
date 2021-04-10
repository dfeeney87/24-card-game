import React, {useEffect, useState} from 'react';
import {Card} from './Card';
import {CardHolder} from './CardHolder';

function initializeGame () {
    const matches = 12;
    const arrayOne = Array.from(Array(matches).keys());
    const arrayTwo = Array.from(Array(matches).keys());
    return arrayOne.concat(arrayTwo).map((gm, i) => {
        return {value: gm, hash: `${i}-gm`}
    })
}

export const Game = () => {
    const initialGame = initializeGame();
    const [cards, setCards] = useState(initialGame);
    const [turnActive, setTurnActive] = useState(false);
    const [one, setOne] = useState(null);
    const [two, setTwo] = useState(null);

    const deleteCard = (cardToDelete) => {
        if ((one.value === cardToDelete.value) && (one.hash !== cardToDelete.hash)) {
            const cardsCopy = cards.slice();
            const filteredCards = cardsCopy.filter(card => card.value !== cardToDelete.value)
            setTimeout(()=> setCards(filteredCards), 1000);
        }
        setTimeout(() => {
            setOne(null)
            setTwo(null)
        }, 1000)
    }

    const handleTurn = (setCard, value) => {
        setCard(value)
        setTurnActive(prevTurn => !prevTurn)
        if(one) {
            deleteCard(value)
        }
    }
    console.log({one, two})
    const takeTurnCallback = turnActive ? (x) => handleTurn(setTwo, x) : (x) => handleTurn(setOne, x);
        return(
            <div className={'game-board'}>
            {
                initialGame.map((card, i) => {
                    return (
                    <CardHolder key={`${card}-${i}-card-holder`} gameCards={cards} value={card}>
                        <Card key={`${card}-${i}-card`}  takeTurn={takeTurnCallback} value={card} selectedCards={[one,two]}/>
                    </CardHolder>
                    )
                })
            }
        </div>
        )
    }