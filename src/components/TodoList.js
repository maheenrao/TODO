import React from 'react'
import Todo from './Todo';
const TodoList = (props) => {
  return (
  
      <div>
        <ul>
          {props.detail.map((item) => (
            <Todo key={item.id} task={item.task} />
          ))}
          {/* <button onClick={() => props.onDelete(item.id)}>button</button> */}
        </ul>

        {/* <Todo
        id={props.detail[0].id}
        task={props.detail[0].task}
        complete={props.detail[0].complete}
      />
      <Todo
        id={props.detail[1].id}
        task={props.detail[1].task}
        complete={props.detail[1].complete}
      />
      <Todo
        id={props.detail[2].id}
        task={props.detail[2].task}
        complete={props.detail[2].complete}
      />
      <Todo
        id={props.detail[3].id}
        task={props.detail[3].task}
        complete={props.detail[3].complete}
      />
      <Todo
        id={props.detail[4].id}
        task={props.detail[4].task}
        complete={props.detail[5].complete}
      />
      <Todo
        id={props.detail[5].id}
        task={props.detail[5].task}
        complete={props.detail[5].complete}
      />
      <Todo
        id={props.detail[6].id}
        task={props.detail[6].task}
        complete={props.detail[6].complete}
      />
      */}
      </div>
    
  );
};


export default TodoList