import { render, waitForElementToBeRemoved, screen, fireEvent } from '@testing-library/react';
import {Game} from './Game';

test('there are 24 cards', () => {
    const {container} = render(<Game />);
    const numberOfCards = container.querySelectorAll('.card-inner').length;
    expect(numberOfCards).toBe(24);
});

test('take turn', async () => {
    const {container} = render(<Game />);
    const card = container.querySelectorAll('.value-10');
    fireEvent.click(card[0])
    fireEvent.click(card[1])
    let promiseStatus = false;
    await waitForElementToBeRemoved(document.querySelector('.value-10'))
        .then(() => promiseStatus = true)
    expect(promiseStatus).toBeTruthy();
});