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
  
    <ul className='py-8 '>
      {todos.map((todo) => (
        <li className="todo-list text-3xl" key={todo.id}>
          <input
          className='flex-row bg-fuchsia-400 p-2 px-5'
            type="text"
            value={todo.title}
            //className={`list ${todo.completed ? "complete" : ""}`}
            //Shows todo title, styled differently if completed
            readOnly
          />
          <div>
            <button
              className="button-complete px-3 py-3 hover:bg-blue-500 text-xl rounded"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle fa-3x"></i>
            </button>
            <button 
              className="button-edit px-3 py-3 hover:bg-blue-500 text-xl rounded"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit fa-3x"></i>
            </button>
            <button
              className="button-delete px-3 py-3 hover:bg-blue-500 text-xl rounded"
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
