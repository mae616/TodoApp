import React, { useState } from 'react'

const Item = ({ content, id, deleteTodo }) => {

    const [isDone, setIsDone] = useState(false)

    // isDone => 現在の状態の参照
    // setIsDone => 状態を更新する関数
    // checkboxが変更された際,isDoneの状態を変更する 

    const handleDelete = () => {
        //* Appコンポーネントのもつ、todosから、自分の持つidと同じidを持つ要素を取り除いて欲しい。
        deleteTodo(id)
    }

    return (
        <li>
            <input
                type="checkbox"
                onChange={() => {
                    setIsDone(!isDone)
                }}
            />

            <span
                style={
                    { textDecoration: isDone ? 'line-through' : 'none' }
                }
            >{content}</span>
            <button onClick={handleDelete}>削除</button>
        </li>
    )
}

export default Item