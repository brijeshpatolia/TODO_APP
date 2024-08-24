import { useEffect, useState } from 'react';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(data => {
        const todosArray = Array.isArray(data) ? data : [data]; // Ensure it's an array
        setTodos(todosArray);
      })
      .catch(error => console.error('Error fetching todos:', error));
  }, []);
  

  return (
    <div className="flex h-screen">
      {/* Left Sidebar: CreateTodo (Fixed) */}
      <div className="w-1/3 h-full p-6 bg-gray-100 border-r border-gray-300">
        <CreateTodo />
      </div>

      {/* Right Content: Todos (Scrolls) */}
      <div className="w-2/3 h-full overflow-y-auto">
        <Todos
          todos={todos}
        />
      </div>
    </div>
  );
}

export default App;