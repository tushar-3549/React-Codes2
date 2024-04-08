import React, { useEffect, useState } from 'react'

const DataFetch = () => {

    const [todos, setTodos] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/todos")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setTodos(data);
                })
        }, 2000);
    }, []);

    return (
        <div>
            <h1>Data-Fetch Example</h1>
            {todos === null ? (
                <p>Loading...</p>
            ) : (
                todos.map((todo) => {
                    return <p key={todo.id}>{todo.title}</p>
                })
            )}
        </div>
    )
}

export default DataFetch
