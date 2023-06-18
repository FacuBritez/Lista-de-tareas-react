import React from "react";
import '../stylesheets/Lista.sass'
import Date from './Date';
import Form from './Form';

function Lista() {
    return (
        <div className="lista">
            <Date />
            <Form />
        </div>
    )
}

export default Lista;