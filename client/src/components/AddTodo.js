import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from '../styles/AddTodo.scss';

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
      {/* <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Default
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup> */}
      <Button variant="primary" onClick={onButtonClick}>
        ADD
      </Button>{' '}
    </div>
  );
}
