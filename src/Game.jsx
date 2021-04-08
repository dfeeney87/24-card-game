import React, {useEffect, useState} from 'react';
import {Card} from './Card';

export const Game = () => {
    const [cards, setCards] = useState(Array.from(Array(12).keys()).concat(Array.from(Array(12).keys())))
    const [turnActive, setTurnActive] = useState(false)
    const [one, setOne] = useState(null)
    const [two, setTwo] = useState(null)
    useEffect(() => {
        if (two && (one === two)) {
            deleteCard(one)
        }
    })
    const deleteCard = (cardId) => {
        console.log(cards)
        console.log(cardId)
        setOne(null)
        setTwo(null)
        const cardsCopy = cards.slice();
        const location = cardsCopy.filter(x => x !== cardId)
        setCards(location);
    }

    const handleTurn = (setCard, setTurn, value) => {
        setCard(value)
        setTurn(prevTurn => !prevTurn)
    }

    const takeTurn = (cardValue, setValueCallback) => {
        handleTurn(setValueCallback, setTurnActive, cardValue) 
    }
    console.log({one,two, turnActive})
    const takeTurnCallback = turnActive ? (x) => takeTurn(x, setTwo) : (x) => takeTurn(x, setOne)  
        return(
            <>
            <div>This is a board</div>
            {
                cards.map((card, i) => {
                    return (<Card key={`${card}-${i}-card`} takeTurn={takeTurnCallback} value={card} />)
                })
            }
        </>
        )
    }