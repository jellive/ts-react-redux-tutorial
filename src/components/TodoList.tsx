import React from 'react'
import { Todo } from '../modules/todos'
import TodoItem from './TodoItem'

function TodoList() {
    const todos: Todo[] = [] // TODO: 커스터 Hook을 사용하여 조회

    if (!todos.length) return <p>등록된 항목이 없습니다.</p>

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    )
}

export default TodoList