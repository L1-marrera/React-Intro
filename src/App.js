import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar césped', completed: true },
  { text: 'Completar curso de YouTube', completed: false },
  { text: 'Ver final de serie', completed: false },
  { text: 'Completar examen', completed: false },
  { text: 'Usar estados derivados', completed: true }
]

function App() {
  // Definiendo estados
  const [ToDos, setToDos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  // Definiendo estados derivados
  const completedTodos = ToDos.filter(todo => !!todo.completed).length;
  const totalTodos = ToDos.length;
  const searchedTodos = ToDos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...ToDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    setToDos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...ToDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setToDos(newTodos);
  }

  return (
    <React.Fragment>

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)} />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
