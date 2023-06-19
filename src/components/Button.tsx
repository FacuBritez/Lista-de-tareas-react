import React from "react";
import '../stylesheets/Button.sass'

function Button(props: any) {

    return(
        <button type={props.type} className={props.className} onClick={props.onClick}> {props.text}</button>
    );
}

export default Button;