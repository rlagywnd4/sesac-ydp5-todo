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
  return (
    <div className="App">
      {/* todoItems 반복, props 데이터(투두 객체)를 자식 컴포넌트에게 전달 */}
      {todoItems.map((item) => {
        //map을 사용할때에는 key속성을 추가하기
        return <Todo key={item.id} item={item} />;
      })}
    </div>
  );
}

export default App;
