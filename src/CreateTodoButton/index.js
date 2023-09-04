import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }) {
    return (
        <button className='CreateTodoButton' onClick={() =>
            // console.log(event.target)
            {
                setOpenModal(state => !state)
            }
        }>+</button>
    );
}

export { CreateTodoButton };