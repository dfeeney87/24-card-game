export function Card(props) {
    return (
        <div className={'card'} onClick={()=> props.takeTurn(props.value)}>
            <p>{props.value}</p>
            </div>
    )
}