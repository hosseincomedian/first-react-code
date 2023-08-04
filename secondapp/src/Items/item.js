import { useContext } from "react";
import MyContext from "./itemsContext";

const Item = (props) => {
    const {items, setItems} = useContext(MyContext);
    const deleteItem = () => {
        setItems(items.filter(item => item != props.item));
    }
    return (
    <li>
        <span className="todo">{props.item}</span>
        <button className="delete" onClick={deleteItem}>Delete</button>
      </li>
    )
}

export default Item;