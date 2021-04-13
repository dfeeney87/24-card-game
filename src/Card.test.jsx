import { render, screen, fireEvent } from '@testing-library/react';
import {Card} from './Card';

test('a prop callback is invoked on click', () => {
    const mockTakeTurn = jest.fn();
    const value= {value: 1, hash: 'abc'};
    const {container} = render(<Card selectedCards={[]} value={value} takeTurn={mockTakeTurn} />);
    const card = container.querySelector('.card-inner');
    fireEvent.click(card);
    expect(mockTakeTurn).toHaveBeenCalledWith(value);
});

test('active when selected', () => {
    const mockTakeTurn = jest.fn();
    const value= {value: 1, hash: 'abc'};
    const {container} = render(<Card selectedCards={[value]} value={value} takeTurn={mockTakeTurn} />);
    const card = container.querySelector('.active');
    expect(card).toBeInTheDocument();
});

test('not active when not selected', () => {
    const mockTakeTurn = jest.fn();
    const cardValue= {value: 1, hash: 'abc'};
    const selectedValue= {value: 9, hash: 'xyz'};
    const {container} = render(<Card selectedCards={[selectedValue]} value={cardValue} takeTurn={mockTakeTurn} />);
    const card = container.querySelector('.active');
    expect(card).not.toBeInTheDocument();
});