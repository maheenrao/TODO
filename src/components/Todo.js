import React from 'react'

const Todo = (props) => {
  return (
    <div>
      <div>
        <p>{props.id}</p>
        <p>{props.task} </p>
      </div>
    </div>
  );
};

export default Todo