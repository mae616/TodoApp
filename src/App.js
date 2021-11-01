import React, { useState } from 'react'
import Form from './Form'
import List from './List'

import { nanoid } from 'nanoid'

const App = () => {
    const [todos, setTodos] = useState([])

    //* 追加機能 
    const addTodo = value => {
        setTodos([
            ...todos,
            {
                content: value,
                id: nanoid(),
                isDone: false
            }
        ])
    }

    //* 削除機能
    const deleteTodo = id => {
        // 渡されたidをもとにそのidのついたtodoを削除する。
        // 削除したい要素以外の要素を集めた配列で、state`todos`を上書きする。
        setTodos(todos.filter(todo => todo.id !== id))
    }

    //* isDoneの変更
    const setIsDone = (doneChangeId, ChangeIsDone) => {
        setTodos(todos.map(({ id, isDone, ...rest }) => {
            rest.id = id
            rest.isDone = id === doneChangeId ? ChangeIsDone : isDone
            return rest
        }))
    }



    return (
        <>
            <h1>Todo App</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo} setIsDone={setIsDone} />
        </>
    )
}

export default App