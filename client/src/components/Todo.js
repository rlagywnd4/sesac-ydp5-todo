import React from 'react';

// checkbox와 label을 렌더링 하는 투두
export default function Todo({ item, deleteItem }) {
  const { id, title, done } = item;

  const onDeleteButtonClick = () => {
    deleteItem(item);
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
