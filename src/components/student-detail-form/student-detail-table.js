import React, { useEffect, useState } from "react";

export function StudentDetailTable(props) {
    const [serialNo, setSerialNo] = useState(1);
    useEffect(() => {
        let sno = serialNo;
        props.studentDetails?.forEach(element => {
            element.serialNo = sno;
            sno++;
        });
        setSerialNo(sno);
        return ()=>{
            sessionStorage.removeItem("studentDetails");
        };
    }, [props.studentDetails]);
    
    return (
        <table id="studentDetails" border="2">
            <thead>
                <tr id="studentDetailsHead">
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {props.studentDetails && props.studentDetails.map(student => (
                    <tr key={student.name}>
                        <td>{student.serialNo}</td>
                        <td>{student.name}</td>
                        <td>{student.classIn}</td>
                        <td>{student.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}