import React from "react";
import '../stylesheets/Task.sass'

function Task(props: any) {

    const tachar = (id: any) => {
        /*
       const task = la tare;
        task.classList.toggle('done');
        */
    }

    return (
        //Se crea la nueva tarea
        <div className="task" onClick={() => tachar(props.key)}>
            {props.text}
            <i className="trash fa-regular fa-trash-can" onClick={() => props.onClickTrash(props.key)}>
                icon
            </i>
        </div>
    )
};

export default Task;