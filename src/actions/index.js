import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../types"

export const addTodoAction = (todo) => ({
    type: ADD_TODO,
    payload: todo
});

export const toggleTodoComplete = (todoId) => ({
    type: TOGGLE_TODO,
    payload: todoId
});

export const deleteTodoAction = (todoId) => ({
    type: DELETE_TODO,
    payload: todoId
})