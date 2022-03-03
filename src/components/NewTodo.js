import React from 'react'
import TodoForm from './TodoForm';
const NewTodo = (props) => {
  const newtodo = (enterTodo) => {
    const data = {
      ...enterTodo,
      id: Math.random().toString(),
    };
    props.onAddTodo(data);
  };

  return (
    <div>
      <TodoForm onSaveData={newtodo} />
     
    </div>
  );
};

export default NewTodo