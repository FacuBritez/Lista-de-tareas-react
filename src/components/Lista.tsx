import React from "react";
import '../stylesheets/Lista.sass';
import DateBox from "./DateBox";
import Form from './Form';


function Lista() {
    return (
        <div className="lista">
            <DateBox />
            <Form />
        </div>
    )
}

export default Lista;