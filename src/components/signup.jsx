import React from "react";
import { useState } from "react";

const SignUp = () => {

    const [name , setname] = useState("");
    const [email , setemail] = useState("");
    const [password , setpassword] = useState("");

    function validateEmail(x){
        let rgx = /^([0-9a-z]([-_\\.]*[0-9a-z]+)*)@([a-z]([-_\\.]*[a-z]+)*)[\\.]([a-z]{2,9})+$/
        if(rgx.test(x)){
            return true
        }
        return false
    }
    async function CreateUser(){
        if(!validateEmail(email)){
            alert("Enter valid Email")
        }
        else if(password.trim().length == 0 || password.length < 8){
            alert("Enter Valid password")
        }
        else{
        let data = {name : name , email : email , password : password}
        let res = await fetch("http://localhost:5000/user/createUser" , {method:'post', body : JSON.stringify(data) , headers : {'Content-Type' : 'application/json'}});
        res = await res.json()
        if(res.status == false){
            alert(res.message)
        }
        else{
            setname("")
            setemail("")
            setpassword("")
            alert("user created successfully Login to see student list")
        }
    }
    }

    return (
        <div className="container" style={{width: "600px" , height:"500px", background:"brown" , color:"white"}}>
        <form className=" align-self-center">
            <h1>Signup User</h1>
            <div className="form-group row">
                <label  className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)}/>
                </div>
            </div>
            <div className="form-group row">
                <label  className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)}/>
                </div>
            </div>
            <div className="form-group row">
                <label  className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)}/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
                    <button type="button" className="btn btn-primary" onClick={CreateUser}>Sign Up</button>
                </div>
            </div>
        </form>
        </div>
    )
}

export default SignUp