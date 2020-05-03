import React, {useState} from 'react';
import {v1 as uuid} from "uuid";

import { addTodoAction } from '../actions/index';
import { useDispatch } from 'react-redux';

const TodoInput = () => {

    const [todo, setTodo] = useState('');
    // Utilizo dispatch para mandar datos al action
    const dispatch = useDispatch();
    // Envio los datos del submit al action
    const addTodo = todo => dispatch(addTodoAction(todo));

    const handleChange = (e) => {
        setTodo(
            e.target.value
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.trim === '') return;
        // Le otorgo los valores al todo
        addTodo({
            id: uuid(),
            name: todo,
            complete: false
        });

        setTodo('');
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <div className="form-div">
                <input 
                    type="text"
                    name="todo"
                    placeholder="Agrega una tarea"
                    value={todo}
                    onChange={handleChange}
                />
                <button type="submit">Añadir</button>
            </div>
        </form>
    );
}

export default TodoInput;
