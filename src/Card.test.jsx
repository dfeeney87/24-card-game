import { render, screen, fireEvent } from '@testing-library/react';
import {Card} from './Card';

test('a prop callback is invoked on click', () => {
    const mockClick = jest.fn();
    render(<Card value={1} deleteCard={mockClick} />);
    const card = screen.getByText('This is a card')
    fireEvent.click(card)
    expect(mockClick).toHaveBeenCalledWith(1);
});