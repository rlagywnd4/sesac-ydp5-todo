import React, { useState } from 'react';

// checkbox와 label을 렌더링 하는 투두
export default function Todo({ item, deleteItem }) {
  // 삭제만 생각하면 state필요없지만 수정했을때를 생각해서 사용함
  const [todoItem, setTodoItem] = useState(item);
  const { id, title, done } = todoItem;

  const onDeleteButtonClick = () => {
    deleteItem(todoItem);
  };
  return (
    <div>
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
      />
      <label htmlFor={`todo${id}`}>{title}</label>
      <button onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  );
}
