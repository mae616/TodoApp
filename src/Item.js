import React, { useState } from 'react'

const Item = ({ content }) => {

    const [isDone, setIsDone] = useState(false)

    // isDone => 現在の状態の参照
    // setIsDone => 状態を更新する関数
    // todo : checkboxが変更された際,isDoneの状態を変更する 

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
        </li>
    )
}

export default Item