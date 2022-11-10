import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const StudentList = () => {
    const [studentlist, setstudentlist] = useState([]);
    let navigate = useNavigate()
    useEffect(() => {
        let user = localStorage.getItem('user')
        if (!user) {
            navigate("/login")
        }
        else {
            GetstudentList();
        }
    })

    async function GetstudentList() {
        let tkn = JSON.parse(localStorage.getItem('token'))
        let res = await fetch("http://localhost:5000/user/studentlist", { headers: { 'api-key': tkn } })
        res = await res.json()
        setstudentlist(res.message)
    }

    return (
        <div>
            <div className="list-group">
            <h1>Student List</h1>
                {studentlist.map((e, idx) => {
                    return(
                    <div className="list-group-item list-group-item-action flex-column align-items-start active">
                        <div className="d-flex w-100 justify-content-between">
                            <small>{idx + 1}</small>
                            <h5 className="mb-1">{e.Name}</h5>
                        </div>
                        <p className="mb-1">{e.Marks}</p>
                        <small>{e.Subject}</small>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default StudentList
