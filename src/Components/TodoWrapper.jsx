// TodoWrapper.js
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "../Components/EdittodoForm";
import { v4 as uuidv4 } from "uuid"; 

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    
    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false }]);
    };

    const toggleComplete = id => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const editTodo = (newTask, id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, task: newTask, isEditing: !todo.isEditing } : todo
            )
        );
    };

    return (
        <div className="TodoWrapper">
            <h1>Get things done</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map(todo => (
                todo.isEditing ? (
                    <EditTodoForm 
                        key={todo.id}
                        editTodo={editTodo}
                        task={todo}
                    />
                ) : (
                    <Todo
                        task={todo}
                        key={todo.id}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )
            ))}
        </div>
    );
};

export default TodoWrapper;
