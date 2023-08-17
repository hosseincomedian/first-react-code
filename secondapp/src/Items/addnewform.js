import {useState, useContext} from "react";
import MyContext from "./itemsContext";
const Form = () => {
  const {items, setItems} = useContext(MyContext)
  const [todo, setTodo] = useState("");

  return (
    <form onSubmit={(event)=>event.preventDefault()}>
      <input type="text" placeholder="Add new todo" value={todo} onChange={(event)=>
        setTodo(()=> 
        event.target.value)}  
      />
      <button type="submit" onClick={()=>{setItems([...items,todo]);setTodo("");}}>Add</button>
    </form>
  );
};

export default Form;
