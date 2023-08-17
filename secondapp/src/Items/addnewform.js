import {useContext, createRef} from "react";
import MyContext from "./itemsContext";
const Form = () => {
  const {items, setItems} = useContext(MyContext)
  const inputTodoRef = createRef()

  const submitHandler = () => {
    if (inputTodoRef.current.value){
      setItems([...items,inputTodoRef.current.value]);
      inputTodoRef.current.style.border = 'none';
    }
    else{
      inputTodoRef.current.style.border = '1px groove red';
    }
    inputTodoRef.current.value="";
  }

  return (
    <form onSubmit={(event)=>event.preventDefault()}>
      <input ref={inputTodoRef} type="text" placeholder="Add new todo"/>
      <button type="submit" onClick={submitHandler}>Add</button>
    </form>
  );
};

export default Form;
