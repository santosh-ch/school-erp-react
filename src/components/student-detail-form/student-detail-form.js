import React from 'react';

export function StudentDetailForm() {
    return (<div>
        <h3>Student Details</h3>
        <form>
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                </div>
                <input type="text" id="name" />
            </div>
            <div>
                <div>
                    <label htmlFor="class">Class</label>
                </div>
                <input type="text" id="class" />
            </div>
            <div>
                <div>
                    <label htmlFor="age">Age</label>
                </div>
                <input type="text" id="age" />
            </div>
            <div>
                <div>
                    <label htmlFor="parent">Parent/Gaurdian Name</label>
                </div>
                <input type="text" id="parent" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>);
}