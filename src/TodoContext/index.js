import { useLocalStorage } from "./useLocalStorage";
import React from "react";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    // Definiendo estados
    const {
        item: ToDos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_v1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    // Definiendo estados derivados
    const completedTodos = ToDos.filter(todo => !!todo.completed).length;
    const totalTodos = ToDos.length;
    const searchedTodos = ToDos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
    });

    const addTodo = (text) => {
        const newTodos = [...ToDos];
        newTodos.push({
            text,
            completed: false
        });
        saveTodos(newTodos);
        saveTodos(newTodos);
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
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };