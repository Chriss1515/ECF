import { useState } from "react";
import List from "./List";
const ListContainer = () => {
  const [lists, setList] = useState([]);
  const [Title, setTitle] = useState("");

  const ajouter = () => {
    setList((prevState) => [...prevState, Title]);
  };
  const Onchange = (e) => {
    setTitle(e.target.value);
    console.log(lists);
  };

  return (
    <>
      <div style={{ border: "2px solid red", padding: "20px" }}>
        <h2>Lists</h2>

        <input type="text" value={Title} onChange={Onchange} />
        <button onClick={ajouter}>Add List</button>

        {lists.map((list) => (
          <div key={list}>
            <p>{list}</p>

            <List />
          </div>
        ))}
      </div>
    </>
  );
};

export default ListContainer;
