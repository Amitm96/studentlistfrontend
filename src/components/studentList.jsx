import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal'
import Addstudent from "./Addstudent";
const StudentList = () => {
    const [studentlist, setstudentlist] = useState([]);
    const [modalopen, setmodalopen] = useState(false);
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
    function Showpopup() {
        setmodalopen(true)
    }
    function Closepopup() {
        setmodalopen(false)
    }

    async function GetstudentList() {
        let tkn = JSON.parse(localStorage.getItem('token'))
        let res = await fetch("http://localhost:5000/user/studentlist", { headers: { 'api-key': tkn } })
        res = await res.json()
        setstudentlist(res.message)
    }

    return (
        <div>
            <h1>Student List</h1>
            <div className="container">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">S No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Marks</th>
                        </tr>
                    </thead>
                    {studentlist.length > 0 ?
                        <tbody>
                            {studentlist.map((e, idx) => {
                                return (
                                    <tr key={e._id}>
                                        <th scope="row">{idx + 1}</th>
                                        <td>{e.Name}</td>
                                        <td>{e.Subject}</td>
                                        <td>{e.Marks}</td>
                                    </tr>
                                )
                            })}
                        </tbody> : <tbody><tr><th>No students are present add student</th></tr></tbody>
                    }
                </table>
                <button type="button" className="btn btn-primary" onClick={Showpopup}>Add Student</button>
                <Modal isOpen={modalopen}>
                    <button onClick={Closepopup}>x</button>
                    <Addstudent />
                </Modal>

            </div>

        </div>
    )
}

export default StudentList
