import React, { useState } from 'react'

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (!value) {
            alert('何か入力してください')
            return
        }
        addTodo(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}   // sumit後、テキストを空にする
                onChange={e => {
                    setValue(e.target.value)
                }}
            />
        </form>
    )
}

export default Form