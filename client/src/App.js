import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import { useState } from 'react';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'my todo1',
      done: false,
    },
    {
      id: 2,
      title: 'my todo2',
      done: false,
    },
    {
      id: 3,
      title: 'my todo3',
      done: true,
    },
    {
      id: 4,
      title: 'my todo4',
      done: true,
    },
  ]);

  // todoItems 상태에 새로운 투두를 추가하는 일
  const addItem = (newItem) => {
    console.log(newItem);

    // newItem id키값 넣고, newItem done 키값
    newItem.id = todoItems.length + 1;
    newItem.done = false;
    // todoItems 배열에 newItem을 추가
    const newTodoItems = todoItems.concat(newItem);
    setTodoItems(newTodoItems);
  };

  // todoItems 상태에 특정 투두를 삭제하는 일
  const deleteItem = (delItem) => {
    const newTodoItems = todoItems.filter((item) => item.id !== delItem.id);
    setTodoItems(newTodoItems);
  };
  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      {/* todoItems 반복, props 데이터(투두 객체)를 자식 컴포넌트에게 전달 */}
      {todoItems.map((item) => {
        //map을 사용할때에는 key속성을 추가하기
        return <Todo key={item.id} item={item} deleteItem={deleteItem} />;
      })}
    </div>
  );
}

export default App;
