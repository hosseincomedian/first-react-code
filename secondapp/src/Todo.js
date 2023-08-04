import { Fragment, useState } from "react";
import Navbar from "./navbar/navbar";
import "./css/todo.css";
import Form from "./Items/addnewform";
import Items from "./Items/items";
import MyContext from "./Items/itemsContext";

const Todo = () => {
  const [items, setItems] = useState([]);
  return (
    <MyContext.Provider value = {{
        items : items,
        setItems : setItems
        }}>
        <Navbar />
        <div className="container">
          <Form />
          <Items />
        </div>
    </MyContext.Provider>
  );
};

export default Todo;
