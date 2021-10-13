import React from "react";
import './card.css';

export function Card(props) {
    // props.name = "Rajesh";
    return (
        <>
            <div className="card">
                {props.moduleName}
                <div>for user {props.name}</div><br/>
                <input id="newName" onChange={props.changeName}/>
            </div>
        </>
    );
}