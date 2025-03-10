import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import "./Style.css"
const FormData = () => {
    const [show, setShow] = useState(false)
    const [Data, setData] = useState({
        FName: "",
        LName: "",
        Email: "",
        Password: "",
        Pincode: ""
    })

    const SubmitEvent = (e) => {
        e.preventDefault()
        console.log(Data)
        setData({
            FName: "",
            LName: "",
            Email: "",
            Password: "",
            Pincode: ""
        })
    }

    const Handlevent = (e) => {
        const { name, value } = e.target
        setData({ ...Data, [name]: value })

    }

    return (
        <>
            <div className="contenar">
                <h1>Inform form</h1>
                <form onSubmit={SubmitEvent} className="form_section">
                    <div className="form_data form_data_name">
                        <div className="fname">
                            <label htmlFor="fname">First Name : </label>
                            <input type="text" id="fname" name="FName" value={Data.FName} placeholder="First Name" onChange={Handlevent} />
                        </div>
                        <div className="lname">
                            <label htmlFor="lname">Last Name : </label>
                            <input type="text" id="lname" name="LName" value={Data.LName} placeholder="Last Name" onChange={Handlevent} />
                        </div>
                    </div>
                    <div className="form_data data">
                        <label htmlFor="">Email ID : </label>
                        <input type="email" id="email" name="Email" value={Data.Email} placeholder="xyz@gmail.com" onChange={Handlevent} />
                    </div>
                    <div className="form_data data">
                        <label htmlFor="password">password : </label>
                        <input type={show ? "text" : "password"} id="password" name="Password" value={Data.Password} placeholder="password" onChange={Handlevent} />
                        <span onClick={() => setShow(!show)}>{show ?  <FaRegEye  className="eye"/>: <FaRegEyeSlash  className="eye"/>}</span>
                    </div>
                    <div className="form_data data">
                        <label htmlFor="pincode">PinCode : </label>
                        <input type="number" id="pincode" name="Pincode" value={Data.Pincode} placeholder="PinCode" onChange={Handlevent} />
                    </div>
                    <button className="btn" type="Submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormData