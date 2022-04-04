import Item from './Item.jsx'

const List = (props) => {
    return (
        <div className="subscribes-list">
            {props.items.map((item) => <Item item={item} /> )}
        </div>
    )
}

export default List