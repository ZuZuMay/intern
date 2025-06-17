import React, { useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';

const Textbox = ({ input, setInput, todos, setTodos, edittodo, setedittodo }) => {

  const updateTodo = (title, id, completed) => {
    const updated= todos.map((todo) =>
      // { return { title, id, completed }}
       todo.id === id ? { title, id, completed } : todo
    );
    console.log(updated, "updated")
    setTodos(updated);
    //after update,setedittodo is clear
    setedittodo(null); // Better to use null instead of an empty string
  };
//Runs every time edittodo changes:
  useEffect(() => {
    //title is input text
    if (edittodo) {
      setInput(edittodo.title);
    } else {
      setInput("");
    }
      console.log(" >>>>>> run in useeffect <<<<<<")
  }, [ edittodo]);
//trigger evertime types in input field
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    //Appends a new todo to the todos array.
    if (edittodo) {
       updateTodo(input, edittodo.id, edittodo.completed);
    
    } else {
          //Appends a new todo to the todos array.
      setTodos([...todos, { id: uuidV4(), title: input, completed: false }]); // add new
     
    }
    //clear input
    setInput('');
  };
  console.log(" >>>>>> run <<<<<<")

  return (
    <form onSubmit={onFormSubmit}>
      <input
        style={{ padding: 30, fontSize: 20 ,marginLeft:50}}
        type="text"
        className='text-input'
        //in text input to display
        placeholder="Enter task"
        value={input}
        //button click ,fun work
        required
        //add input text
        onChange={onInputChange}
      />
      <br /><br/>
      <button
        className="add"
        type="submit"
        style={{ padding: 20, marginLeft: 170 ,}}
        //to display ok for edit
      >
        {edittodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Textbox;
