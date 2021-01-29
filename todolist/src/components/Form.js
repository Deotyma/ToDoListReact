import React from "react";

const Form = ({ setInputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  return (
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="complited">Complited</option>
          <option value="uncomplited">Uncomplited</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
