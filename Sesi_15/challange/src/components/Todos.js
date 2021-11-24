import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';

export default function Todos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => setTodos(data.slice(0, 10)))
    }, [])

    if (!localStorage.getItem('login')) {
        return (
            <Redirect to="/login" />
        )
    }

    return (
        <>
        <h1>Todo List</h1>
        <table className="table table-striped">
            <thead className="table-dark">
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((todo, idx) => (
                        <tr>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed ? 'v' : 'x'}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    )
}