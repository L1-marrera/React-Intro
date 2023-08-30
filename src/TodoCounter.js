function TodoCounter({ total, completed }) {
    return (
        <h1>
            Has completado {completed} de {total} ToDo
        </h1>
    );
}

export { TodoCounter };