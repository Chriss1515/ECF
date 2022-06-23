import { useState } from "react";
import Todo from "./Todo";

const List = () => {
  const [valueTodo, setValueTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const add = () => {
    setTodos([...todos, valueTodo]);
  };

  const Onchange = (e) => {
    setValueTodo(e.target.value);
  };

  return (
    <>
      <div style={{ border: "2px solid blue", padding: "20px" }}>
        <input type="text" value={valueTodo} onChange={Onchange} />
        <button onClick={add}>Add valueTodo</button>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
    </>
  );
};

export default List;
