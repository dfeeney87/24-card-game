import { render, screen, fireEvent } from '@testing-library/react';
import {Board} from './Board';

test('a prop callback is invoked on click', () => {
    const mockClick = jest.fn();
    render(<Board cards={[1]} deleteCard={mockClick} />);
    const card = screen.getByText('This is a card')
    fireEvent.click(card)
    expect(mockClick).toHaveBeenCalledWith(1);
});