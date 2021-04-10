import {useState} from 'react'

export function Card(props) {
    const {selectedCards, value, takeTurn} = props;
    const [status, setStatus] = useState(false);
    
    const clickHandler = () => {
        setStatus(prevStatus => !prevStatus);
        takeTurn(value)
    }
    const statusCheck = () => {
        return selectedCards.reduce((ac, it) => {
            const selected = it && it.hash && it.hash === value.hash;
            if (selected) {
                console.log(value.hash)
                ac = selected
            };
            return ac;
        }, false)
    };
    return (
            <div className={statusCheck() ? 'card-inner active': 'card-inner'} onClick={clickHandler}>
                <div className={'card-back'} >{props.value.value}</div>
                <div className={'card-front'} >{'Flip Me'}</div>
            </div>
    )
}