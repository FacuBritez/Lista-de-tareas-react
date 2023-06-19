import React from "react";
import '../stylesheets/Form.sass'
import Button from "./Button";
import { useState } from "react";

function Form() {

    const [tasks, setTasks] = useState([] as string[]);
    const [newTask, setNewTask] = useState('');

    const addNewTask = () => {
        console.log('addNewTask')
        
        //.trim() es para borrar los espacios en blanco al principio y final de un string
        if (newTask.trim() !== ''){
            setTasks([...tasks, newTask]);
            setNewTask('');
        }

        console.log(tasks)
    }
 
    const order = () => {
        console.log('order')
    }

    const trash = () => {
        console.log('trash')
    }

    return (
        <>
            <form>
                <input
                    type="text"
                    id="input"
                    placeholder="Nueva tarea"
                    autoComplete="off"
                    onChange={e => setNewTask(e.target.value)}
                //Añadir keyup enter
                />
                <Button type='button' text='+' className='addTaskButton' onClick={() => addNewTask()} />
                <Button type='button' text='Ordenar' className='orderButton' onClick={() => order()} />
                <Button type='button' text='trash' className='removeButton' onClick={() => trash()} />
            </form>
            <div id="tasksContainer">
                
            </div>
        </>
    );
}

export default Form;