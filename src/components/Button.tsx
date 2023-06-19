import React from "react";
import '../stylesheets/Button.sass'

function Button(props: any) {
    return(
        <button className={props.className}> {props.text}</button>
    );
}

export default Button;