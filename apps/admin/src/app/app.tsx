import { Banner } from '@nx-test/common-ui';
import { useEffect, useState } from 'react';

export function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    fetch('http://localhost:3000/api/todos')
      .then((r) => r.json())
      .then((r) => setTodos(r));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <Banner text="Welcome to our admin app." />
      <h1>{`There are ${todos.length} todos`}</h1>

      <h1>Create Todo</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          console.log('======', e.target.task.value);

          fetch('http://localhost:3000/api/todos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              task: e.target.task.value,
              completed: false,
            }),
          }).then(() => {
            getTodos();
          });
        }}
      >
        <input placeholder="task" name="task" />
        <button>Create</button>
      </form>

      {todos.map((item, index) => {
        return (
          <div key={index}>
            {item.task} | {item.completed.toString()}
          </div>
        );
      })}
    </>
  );
}

export default App;
