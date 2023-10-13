import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // console.log(process.env.REACT_APP_DB_HOST); // process.env넣기(react)
  const [todoItems, setTodoItems] = useState([]);
  const [itemCount, setItemCount] = useState();

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get(`${process.env.REACT_APP_DB_HOST}/todos`);
      console.log(res.data.length);
      setTodoItems(res.data);
      setItemCount(res.data.length);
    };
    getTodos();
  }, []);
  // todoItems 상태에 새로운 투두를 추가하는 일
  const addItem = async (newItem) => {
    // console.log(newItem);

    // // newItem id키값 넣고, newItem done 키값
    // newItem.id = todoItems.length + 1;
    // newItem.done = false;
    // // todoItems 배열에 newItem을 추가
    // const newTodoItems = todoItems.concat(newItem);
    // setTodoItems(newTodoItems);

    const res = await axios.post(
      `${process.env.REACT_APP_DB_HOST}/todo`,
      newItem
    ); //axios.post('url',{})
    setTodoItems([...todoItems, res.data]);
    setItemCount(itemCount + 1);
  };

  // todoItems 상태에 특정 투두를 삭제하는 일
  const deleteItem = async (delItem) => {
    const newTodoItems = todoItems.filter((item) => item.id !== delItem.id);
    const res = await axios.delete(
      `${process.env.REACT_APP_DB_HOST}/todo/${delItem.id}`
    );
    setTodoItems(newTodoItems);
    setItemCount(itemCount - 1);
  };

  const updateItem = async (targetItem) => {
    const res = await axios.patch(
      `${process.env.REACT_APP_DB_HOST}/todo/${targetItem.id}`,
      targetItem
    ); //axios.patch('url',{})
  };

  return (
    <div className="App">
      <div>todo count : {itemCount}</div>
      <AddTodo addItem={addItem} />
      {/* todoItems 반복, props 데이터(투두 객체)를 자식 컴포넌트에게 전달 */}
      {todoItems.map((item) => {
        //map을 사용할때에는 key속성을 추가하기
        return (
          <Todo
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        );
      })}
    </div>
  );
}

export default App;
