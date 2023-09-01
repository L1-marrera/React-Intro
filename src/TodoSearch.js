import './TodoSearch.css'

function TodoSearch() {
    return (
        <input className='TodoSearch' placeholder="Escriba su tarea pendiente" 
            onChange={ (event) => {
                console.log(event.target.value);
            }}/>
    );
}

export { TodoSearch };