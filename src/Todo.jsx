const Todo = ({ todo }) => {
  return (
    <p key={todo} style={{ border: "2px solid green", padding: "2px" }}>
      <input type="checkbox" /> {todo} <button>x</button>
    </p>
  );
};

export default Todo;
