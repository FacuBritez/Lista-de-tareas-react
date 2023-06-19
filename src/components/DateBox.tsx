import React from "react";
import '../stylesheets/DateBox.sass'

function DateBox() {

    const date = new Date();
    const dateNumber = date.toLocaleString('es', { day: 'numeric' });
    const dateText = date.toLocaleString('es', { weekday: 'long' });
    const dateMonth = date.toLocaleString('es', { month: 'short' });
    const dateYear = date.toLocaleString('es', { year: 'numeric' });

    return (
        <div className="date">
            <div className="dateRight">
                <div id="dateNumber">{dateNumber}</div>
                <div>
                    <div id="dateMonth">{dateMonth}</div>
                    <div id="dateYear">{dateYear}</div>
                </div>
            </div>
            <div id="dateText">{dateText}</div>
        </div>
    );
}

export default DateBox;