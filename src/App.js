import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

// const defaultTodos = [
//   { text: 'Cortar césped', completed: true },
//   { text: 'Completar curso de YouTube', completed: false },
//   { text: 'Ver final de serie', completed: false },
//   { text: 'Completar examen', completed: false },
//   { text: 'Usar estados derivados', completed: true }
// ]

// localStorage.setItem('TODOS_v1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_v1');

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_v1')
  let parsedTodos;

  if(!localStorageTodos) {
    localStorage.setItem('TODOS_v1', JSON.stringify([]))
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  // Definiendo estados
  const [ToDos, setToDos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  // Definiendo estados derivados
  const completedTodos = ToDos.filter(todo => !!todo.completed).length;
  const totalTodos = ToDos.length;
  const searchedTodos = ToDos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_v1', JSON.stringify(newTodos))
    setToDos(newTodos);
  }

  const completeTodo = (text) => {
    const newTodos = [...ToDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...ToDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
