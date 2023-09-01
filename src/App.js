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
  { text: 'Completar examen', completed: false},
  { text: 'Usar estados derivados', completed: true}
]

function App() {
  // Definiendo estados
  const [ToDos, setToDos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = ToDos.filter(todo => !!todo.completed).length;
  const totalTodos = ToDos.length;

  return (
    <React.Fragment>

      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

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
