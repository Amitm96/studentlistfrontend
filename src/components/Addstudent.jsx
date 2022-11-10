import React from "react";
import { useState } from "react";
const Addstudent = () => {
    const [name , setname] = useState("");
    const [subject , setsubject] = useState("");
    const [marks , setmarks] = useState(0);
    async function Submitdetails(){
        let tkn = JSON.parse(localStorage.getItem("token"))
        let data = {Name : name , Subject : subject , Marks : marks}
        let res = await fetch("http://localhost:5000/user/createstudent" , {method:'post', body : JSON.stringify(data) , headers : {'Content-Type' : 'application/json' , 'api-key' : tkn}})
        res = await res.json()
        console.log(res)
    }
    return (
        <div className="container" style={{ width: "600px", height: "500px", background: "skyblue", color: "white" }}>
            <form className=" align-self-center">
                <h1>Student Details</h1>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Subject</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Subject" value={subject} onChange={(e) => setsubject(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Marks</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="inputPassword3" placeholder="Marks" value={marks} onChange={(e) => setmarks(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="button" className="btn btn-primary" onClick={Submitdetails}>Add Student</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Addstudent