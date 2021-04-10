export const CardHolder = (props) => {
    const validChild = props.gameCards.filter(card => card.hash === props.value.hash).length > 0;
    return (
        <div className={'card-holder'}>
            {validChild && props.children}
        </div>
    )
}