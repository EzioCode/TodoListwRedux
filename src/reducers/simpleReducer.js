import {
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO
} from '../types';

import {v1 as uuid} from "uuid";

const initialState = {
    todos: [
        {
            id: uuid(),
            name: 'Read a bit',
            complete: false
        },
        {
            id: uuid(),
            name: 'Read a lot',
            complete: false
        }
    ]
}


export default function reducer(state = initialState, action) {
    switch (action.type){
        case ADD_TODO: 
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => (
                    todo.id === action.payload 
                    ? {
                        ...todo,
                        complete: !todo.complete
                    } :
                    todo
                ))
            };
        
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            };

        default:
            return state;
    }
}
