import React, { useEffect, useState } from 'react';
import Header from "./Component/Header";
import Textbox from './Component/Textbox';
import Todolist from './Component/Todolist';

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [edittodo, setedittodo] = useState(null);
//run add,edit,delete in every time
  useEffect(() => {
    //save updatelist to localstorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Textbox
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          edittodo={edittodo}
          setedittodo={setedittodo}
        />
        <Todolist
          todos={todos}
          setTodos={setTodos}
          edittodo={edittodo}
          setedittodo={setedittodo}
        />
      </div>
    </div>
  );
}

export default App;
