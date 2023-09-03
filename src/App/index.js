import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
import React from 'react';

// localStorage.removeItem('TODOS_v1');
// const defaultTodos = [
//   { text: 'Cortar césped', completed: true },
//   { text: 'Completar curso de YouTube', completed: false },
//   { text: 'Ver final de serie', completed: false },
//   { text: 'Completar examen', completed: false },
//   { text: 'Usar estados derivados', completed: true }
// ]

// localStorage.setItem('TODOS_v1', JSON.stringify(defaultTodos));

function App() {
  // Definiendo estados
  const {
    item: ToDos, 
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_v1', []);
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
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...ToDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    />
  )
}

export default App;
