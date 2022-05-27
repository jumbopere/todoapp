import { useState } from "react";
import { Form, Todo } from "./components";

const App = () => {
  const [todos, setTodos] = useState([{ text: "Simple Todo", isDone: false }]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return <div className="p-8 bg-white">
  <div className="container  ">
<h1 className="text-center mb-6">
  Todo List
</h1>
<Form addTodo={addTodo}/>
  </div>
  {
    todos.map((todo, index)=> (
      <div className="relative flex flex-col bg-white bg-clip-border border rounded">
<div className="p-5 min-h-1 flex-auto">
<Todo
key={index}
index={index}
todo={todo}
markTodo={markTodo}
removeTodo={removeTodo}
/>
</div>
      </div>
    ))
  }
    </div>;
};

export default App;
