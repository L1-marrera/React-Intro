import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar césped', completed: true},
  { text: 'Completar curso de YouTube', completed: false},
  { text: 'Ver final de serie', completed: false},
  { text: 'Completar examen', completed: false}
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={20}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
