import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(e) {
    setInputText(e.target.value);
  }
  function additemClick() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText(" ");
  }
  function itemDelete(idx) {
    const data = [...items];
    data.splice(idx, 1);
    setItems(data);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={additemClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem, idx) => (
            <div>
              <li key={idx}>
                {todoitem}
                &nbsp;
                <button onClick={() => itemDelete(idx)}>
                  <span> x</span>
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
