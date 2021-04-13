import React, {useState} from 'react';
import {Card} from './Card';
import {CardHolder} from './CardHolder';
import { initializeGame } from './gameInitializer';

const initialGame = initializeGame();

export const Game = () => {
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
    const takeTurnCallback = turnActive ? (x) => handleTurn(setTwo, x) : (x) => handleTurn(setOne, x);
        return(
            <div className={'game-board'}>
            {
                initialGame.map((card, i) => {
                    return (
                    <CardHolder key={`${i}-card-holder`} gameCards={cards} value={card}>
                        <Card key={`${i}-card`}  takeTurn={takeTurnCallback} value={card} selectedCards={[one,two]}/>
                    </CardHolder>
                    )
                })
            }
        </div>
        )
    }