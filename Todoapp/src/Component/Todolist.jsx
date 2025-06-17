import React from 'react';

const Todolist = ({ todos, setTodos, setedittodo }) => {
  const handleDelete = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const handleEdit = (todo) => {
    const findTodo=todos.find((to)=>to.id===todo.id)
    setedittodo(findTodo)
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) =>
        //change to opposite
        item.id === todo.id ? { ...item, completed: !item.completed } : item

      )
    );
  };

  return (
  
    <ul style={{border:"1 solid pint"}}>
      {todos.map((todo) => (
        <li className="todo-list" key={todo.id} style={{ fontSize: 30,padding:20}}>
          <input
            type="text"
            value={todo.title}
            //className={`list ${todo.completed ? "complete" : ""}`}
            //Shows todo title, styled differently if completed
            readOnly
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle fa-3x"></i>
            </button>
            <button 
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit fa-3x"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash fa-3x"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Todolist;
