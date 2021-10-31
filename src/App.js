import React, { useState } from 'react'
import Form from './Form'
import List from './List'

const App = () => {
    const [todos, setTodos] = useState([
        {
            content: '課題をする'
        },
        {
            content: '洗濯をする'
        },
        {
            content: '電話をする'
        }
    ])

    const addTodo = (value) => {
        setTodos([
            ...todos,
            {
                content: value
            }
        ])
    }

    return (
        <>
            <h1>Todo App</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} />
        </>
    )
}

export default App