import React, { useState } from 'react';

// checkbox와 label을 렌더링 하는 투두
export default function Todo({ item, deleteItem }) {
  // 삭제만 생각하면 state필요없지만 수정했을때를 생각해서 사용함
  const [todoItem, setTodoItem] = useState(item);
  const { id, title, done } = todoItem;
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteButtonClick = () => {
    deleteItem(todoItem);
  };

  // title 을 클릭하면 readOnly를 false로 변경(수정가능하도록)
  const offReadOnlyMode = () => {
    setReadOnly(false);
  };

  // title 수정
  const editEventHandler = (e) => {
    const { title, ...rest } = todoItem;
    setTodoItem({
      title: e.target.value, //e.value도 가능
      ...rest,
    });
  };

  // checkbox 상태 업데이트
  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem;
    setTodoItem({
      done: e.target.checked,
      ...rest,
    });
  };

  // enter키 누르면 readOnly를 true로 변경
  const editKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
      setReadOnly(true);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
        onChange={checkboxEventHandler}
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input
        type="text"
        value={todoItem.title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={editKeyEventHandler}
      />
      <button onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  );
}
