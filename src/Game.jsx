import React, {useEffect, useState} from 'react';
import {Card} from './Card';
import {CardHolder} from './CardHolder';

export const Game = () => {
    const initialGame = Array.from(Array(12).keys()).concat(Array.from(Array(12).keys()));
    const [cards, setCards] = useState(initialGame);
    const [turnActive, setTurnActive] = useState(false);
    const [one, setOne] = useState(null);
    const [two, setTwo] = useState(null);
    useEffect(() => {
        if (two && (one === two)) {
            deleteCard(one)
        }
    })
    const deleteCard = (cardId) => {
        setOne(null)
        setTwo(null)
        const cardsCopy = cards.slice();
        const location = cardsCopy.filter(x => x !== cardId)
        setCards(location);
    }

    const handleTurn = (setCard, value) => {
        setCard(value)
        setTurnActive(prevTurn => !prevTurn)
    }

    const takeTurn = (cardValue, setValueCallback) => {
        handleTurn(setValueCallback, cardValue) 
    }
    const takeTurnCallback = turnActive ? (x) => takeTurn(x, setTwo) : (x) => takeTurn(x, setOne);
        return(
            <div className={'game-board'}>
            {
                initialGame.map((card, i) => {
                    return (
                    <CardHolder key={`${card}-${i}-card-holder`} gameCards={cards} value={card}>
                        <Card key={`${card}-${i}-card`}  takeTurn={takeTurnCallback} value={card} />
                    </CardHolder>
                    )
                })
            }
        </div>
        )
    }