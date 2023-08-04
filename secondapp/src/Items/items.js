import { useContext } from "react";
import Item from "./item";
import MyContext from "./itemsContext";

const Items = () => {
  const {items, setItems} = useContext(MyContext)
  const itemsComponent = items.map(item => <Item item={item} />)
  return (
    <ul className="list">
      {
        itemsComponent
      }
    </ul>
  );
};

export default Items;