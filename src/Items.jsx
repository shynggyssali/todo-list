function Items(props) {
  function remove(i) {
    const newTodos = [...props.todos];
    newTodos.splice(i, 1);
    props.setTodos(newTodos);
  }

  function edit(i) {
    const ed = prompt("Here you can edit your task");
    if (ed.trim() !== "") {
      const newTodos = [...props.todos];
      newTodos.splice(i, 1, ed);
      props.setTodos(newTodos);
    }
  }

  return (
    <>
      {props.todos.map((todo, i) => {
        return (
          <>
            <div className="items">
              <li key={i}>
                <input type="checkbox" className="checkbox" />
                <span className="text">{todo}</span>
                <button onClick={() => edit(i)} className="edit-btn">
                  ✍️
                </button>
                <button onClick={() => remove(i)} className="remove-btn">
                  🗑️
                </button>
              </li>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Items;
