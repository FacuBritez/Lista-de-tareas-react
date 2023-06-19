import React from "react";
import '../stylesheets/Lista.sass';
import DateBox from "./DateBox";
import Form from './Form';
import TasksContainer from "./TasksContainer";


function Lista() {
    return (
        <div className="lista">
            <DateBox />
            <Form />
            <TasksContainer />
        </div>
    )
}

export default Lista;