import React from 'react'
import Item from './Item'

const List = ({ todos, deleteTodo }) => {

    return (
        <ul>
            {
                todos.map((todo) => {
                    return (
                        <Item
                            content={todo.content}
                            key={todo.id}
                            id={todo.id}
                            isDone={todo.isDone}
                            setIsDone={todo.setIsDone}
                            deleteTodo={deleteTodo}
                        />
                    )
                })
            }
        </ul>
    )
}

export default List