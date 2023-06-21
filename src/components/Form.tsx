import React from "react";
import '../stylesheets/Form.sass'
import Button from "./Button";
import { useState } from "react";
import Task from "./Task";

function Form() {

    const [tasks, setTasks] = useState([] as string[]);
    const [newTask, setNewTask] = useState('');

    const addNewTask = (event: any) => {
        event.preventDefault(
        )
        console.log('addNewTask')

        //.trim() es para borrar los espacios en blanco al principio y final de un string
        if (newTask.trim() !== ''){
            setTasks([newTask, ...tasks]);
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

    const onClickTrash = (key: number) => {
        console.log('removeTask')
        console.log(tasks)
        
        setTasks(tasks.filter((task, index) => index != key))
    }

    return (
        <>
            <form onSubmit={addNewTask}>
                <input
                    type="text"
                    id="input"
                    placeholder="Nueva tarea"
                    autoComplete="off"
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                //Añadir keyup enter
                />
                <Button type='submit' text='+' className='addTaskButton' />
                <Button type='button' text='Ordenar' className='orderButton' onClick={() => order()} />
                <Button type='button' text='trash' className='removeButton' onClick={() => trash()} />
            </form>
            <div id="tasksContainer">
                {
                    tasks.map(
                        (tarea, index) => 
                        <Task key={index} text={tarea} onClickTrash={() => onClickTrash(index)} />
                    )
                }
            </div>
        </>
    );
}

export default Form;