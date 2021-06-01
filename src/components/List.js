import {Text} from './Text'
export function List ( props ) {
    const ListItems = props.items.map( (thing) => {
        return(
        //<li>Fruit: {thing.name} Colour: {thing.colour}</li>
            <Text name={thing.name} color={thing.colour} />
        )
    } )
    return(
        <div className="List">
            <ul>
                {ListItems}
            </ul>
        </div>
    )
}
export default List