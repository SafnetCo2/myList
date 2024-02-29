import React, {useState} from 'react';

// TodoForm.js
const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue("")
    }
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value}placeholder="enter task ..." onChange={(e)=>setValue(e.target.value)}/>
            <button type="submit" className="btn">Add task</button>
        </form>
    );
}

export default TodoForm;