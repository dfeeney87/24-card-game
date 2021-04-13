export function Card(props) {
    const {selectedCards, value, takeTurn} = props;

    const statusCheck = () => {
        return selectedCards.reduce((ac, it) => {
            const selected = it && it.hash && it.hash === value.hash;
            if (selected) {
                ac = selected;
            };
            return ac;
        }, false);
    };
    return (
            <div className={statusCheck() ? 'card-inner active': 'card-inner'} onClick={() => takeTurn(value)}>
                <div className={'card-front'} >
                    <div className={`card-face value-${value.value}`}>{props.value.value}</div>
                </div>
                <div className={'card-back'} />
            </div>
    )
}