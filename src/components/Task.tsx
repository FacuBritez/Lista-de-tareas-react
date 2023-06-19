import React from "react";
import '../stylesheets/Task.sass'

function Task(props: any) {

    const removeTask = (id: any) => {
        console.log('removeTask')
        /*Borrar elemento con id unico uuidv4*/
    }

    const tachar = (id: any) => {
        /*
       const task = la tare;
        task.classList.toggle('done');
        */
    }

    return (
        //Se crea la nueva tarea
        <div className="task" onClick={() => tachar(props.id)}>
            {props.text}
            <i className="trash fa-regular fa-trash-can" onClick={() => removeTask(props.id)}>
                icon
            </i>
        </div>
    )
};

export default Task;