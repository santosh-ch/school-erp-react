import React, { useState, useEffect } from 'react';
import { StudentDetailTable } from './student-detail-table';

export function StudentDetailForm() {
    const [studentDetails, setStudentDetails] = useState([])

    useEffect(() => {
        const students = sessionStorage.getItem("studentDetails");
        if (students != null && students !== "") {
            setStudentDetails(JSON.parse(students));
        }
    }, [])

    function onSubmit(e) {
        const data = e.target || e.currentTarget;
        let currentStudent = new StudentDetail();
        currentStudent = {
            name: data["name"].value,
            age: data["age"].value,
            classIn: data["classIn"].value,
            gaurdian: data["gaurdian"].value,
        };
        studentDetails.push({ ...currentStudent });
        sessionStorage.setItem("studentDetails", JSON.stringify(studentDetails));
    }
    return (<div>
        <h3>Student Details</h3>
        <form onSubmit={onSubmit}>
            <div>
                <div>
                    <label htmlFor="name">Name *</label>
                </div>
                <input type="text" id="name" required />
            </div>
            <div>
                <div>
                    <label htmlFor="classIn">Class</label>
                </div>
                <input type="text" id="classIn" />
            </div>
            <div>
                <div>
                    <label htmlFor="age">Age *</label>
                </div>
                <input type="text" id="age" required />
            </div>
            <div>
                <div>
                    <label htmlFor="gaurdian">Parent/Gaurdian Name</label>
                </div>
                <input type="text" id="gaurdian" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        <div style={{ marginTop: '20px' }}>
            Students Enrolled:
            <StudentDetailTable studentDetails={studentDetails}></StudentDetailTable>
        </div>
    </div>);
}

class StudentDetail {
    name = '';
    classIn = 0;
    age = 0;
    gaurdian = '';
}