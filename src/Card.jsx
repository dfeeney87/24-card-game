export function Card(props) {
    return (
        <div onClick={()=> props.deleteCard(props.value)}>This is a card</div>
    )
}