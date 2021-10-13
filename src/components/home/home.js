import React, { useState } from "react";
import { Card } from "../card/card";

export function Home() {
    const [name, setName] = useState("Mahesh");
    const modules = ['Staff', 'Parent', 'Student'];

    function changeName(e) {
        const value = e.target.value;
        setName(value);
    }
    return (
        <div>
            <label htmlFor="name">Enter your name:</label>
            <input id='name' type='text' onChange={changeName} placeholder="Name" />
            <br/>
            <div>my name is {name}</div>
            {modules.map( key => (
                <Card key={key} name={name} moduleName={key} changeName={changeName}></Card>
            ))}   
        </div>
    );
}