import React from "react";
import '../stylesheets/Form.sass'
import Button from "./Button";

function Form() {

    const addNewTask = () => {
        console.log('addNewTask')
    }
    const order = () => {
        console.log('order')
    }
    const trash = () => {
        console.log('trash')
    }
 
    return (
        <form>
            <input
                type="text"
                id="input"
                placeholder="Nueva tarea"
                autoComplete="off"
                //Añadir keyup enter
            />
            <Button type='button' text='+' className='addTaskButton' onClick={() => addNewTask()}/>
            <Button type='button' text='Ordenar' className='orderButton' onClick={() => order()}/>
            <Button type='button' text='trash' className='removeButton' onClick={() => trash()}/>
        </form>
    );
}

export default Form;