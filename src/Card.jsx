export function Card(props) {
    return (
        <div onClick={()=> props.takeTurn(props.value)}>{props.value}</div>
    )
}