import React, { useState } from 'react';

export default function AddTodo({ addItem }) {
  const [todoItem, setTodoItem] = useState({
    title: '',
  });

  const onButtonClick = () => {
    //빈값처리
    if (todoItem.title.trim() !== '') {
      addItem(todoItem);
      //Input 초기화
      setTodoItem({ title: '' });
    }
  };

  const handleKeyDown = (e) => {
    // enter키 입력시 등록
    if (e.keyCode === 13) {
      onButtonClick();
    }
  };

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Add your new todo"
        value={todoItem.title}
        onKeyDown={handleKeyDown}
        onChange={(e) => setTodoItem({ title: e.target.value })}
      />
      <button onClick={onButtonClick}>ADD</button>
    </div>
  );
}
