import { useEffect, useState } from "react";
import Items from "./Items";
import Button from "./Button";
import Input from "./Input";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [temp, setTemp] = useState("");
  const [inputText, setInputText] = useState();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function add() {
    if (temp.trim() !== "") {
      setTodos((t) => [...t, temp]);
      setTemp("");
      setInputText("");
    }
  }

  return (
    <>
      <div className="todo-container">
        <h1>TODO LIST</h1>
        <Input
          temp={temp}
          setTemp={setTemp}
          inputText={inputText}
          setInputText={setInputText}
          add={add}
        />
        <Button
          todos={todos}
          setTodos={setTodos}
          temp={temp}
          setTemp={setTemp}
          inputText={inputText}
          setInputText={setInputText}
          add={add}
        />
        <Items todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
