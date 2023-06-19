import React from "react";
import '../stylesheets/Form.sass'
import Button from "./Button";

function Form() {
    return (
        <form>
            <input
                type="text"
                id="input"
                placeholder="Nueva tarea"
                autoComplete="off"
                //Añadir keyup enter
            />
            <Button text='+' className='addTaskButton'/>
            <Button text='Ordenar' className='orderButton'/>
            <Button text='trash' className='removeButton'/>
        </form>
    );
}

export default Form;