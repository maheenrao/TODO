import React, {useState} from 'react'

const TodoForm = (props) => {
  const [addInput, setaddInput] = useState("");

  const addInputHandler = (event) => {
    setaddInput(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const data = {
      task: addInput,
    };

    props.onSaveData(data);

    setaddInput("");
  };

  return (
    <form className="App" onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="...Add items"
        value={addInput}
        onChange={addInputHandler}
      />
      <button style={{ margin: "20px" }}>Click To add</button>
    </form>
  );
};

export default TodoForm