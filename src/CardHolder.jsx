export const CardHolder = (props) => {
    const validChild = props.gameCards.filter(card => card === props.value).length > 0;
    return (
        <div className={'card-holder'}>
            {validChild && props.children}
        </div>
    )
}