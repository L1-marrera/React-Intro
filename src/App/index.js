import { TodoProvider } from '../TodoContext';
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
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;
