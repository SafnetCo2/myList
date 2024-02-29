// EdittodoForm.jsx
import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
    const [editTask, setEditTask] = useState(task.task);

    const handleChange = e => {
        setEditTask(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(editTask, task.id);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={editTask} onChange={handleChange} />
            <button type="submit">Update</button>
        </form>
    );
};

export default EditTodoForm;
