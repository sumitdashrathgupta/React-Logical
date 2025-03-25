import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import "../../Style/Style.css"

export default function Form() {
    const [show, setShow] = useState(true)
    const [show1, setShow1] = useState(true)
    const [error, setError] = useState("")
    const [Data, setData] = useState({
        email: "",
        fname: "",
        lname: "",
        password: "",
        Cpassword: "",
        country: ""
    })

    const handelEvent = (e) => {
        let { name, value } = e.target
        setData({ ...Data, [name]: value })
    }

    const submitEvent = (e) => {
        e.preventDefault()
        console.log(Data)


        if (Data.password !== Data.Cpassword) {
            setError("Password not match old password")
            return
        }
        setError(" ")
        
        if(Data.value !== Data) {
            setError("Fill the Form")
            return
        }

        setError(" ")
        setData({
            email: "",
            fname: "",
            lname: "",
            password: "",
            Cpassword: "",
            country: ""
        })
    }

    return (
        <div className="flex  justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white  relative p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center text-blue-600">Sign Up</h2>

                <form className="mt-4 space-y-4" onSubmit={submitEvent}>
                    {/* Email Field */}
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-2 border border-gray-300 rounded"
                        name="email"
                        value={Data.email}
                        onChange={handelEvent}
                    />

                    {/* Name Fields */}
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-1/2 p-2 border border-gray-300 rounded"
                            value={Data.fname}
                            name="fname"
                            onChange={handelEvent}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-1/2 p-2 border border-gray-300 rounded"
                            value={Data.lname}
                            name="lname"
                            onChange={handelEvent}
                        />
                    </div>

                    {/* Password Fields */}
                    <div className="flex space-x-2">
                        <input
                            type={show ? "password" : "text"}
                            placeholder="Password"
                            className="w-1/2 p-2 border border-gray-300 rounded relative"
                            value={Data.password}
                            name="password"
                            onChange={handelEvent}
                        />
                        <span onClick={(e) => setShow(!show)} >{show ? <FaRegEyeSlash className="absolute  bottom-[165px] left-[155px]" /> : <FaRegEye className="absolute  bottom-[165px] left-[155px]" />}</span>
                        <input
                            type={show1 ? "password" : "text"}
                            placeholder="Password-Repeat"
                            className="w-1/2 p-2 border border-gray-300 rounded relative"
                            value={Data.Cpassword}
                            name="Cpassword"
                            onChange={handelEvent}
                        />
                        <span onClick={(e) => setShow1(!show1)} >{show1 ? <FaRegEyeSlash className="absolute  bottom-[165px] right-[36px]" /> : <FaRegEye className="absolute  bottom-[165px] right-[36px]" />}</span>
                    </div>

                    {/* Country Field */}
                    <select className="w-full p-2 border border-gray-300 rounded" value={Data.country} onChange={handelEvent} name="country">
                        <option value="">Country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </select>
                    <p className="text-red-500">{error}</p>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Register Now
                    </button>
                </form>
            </div>
        </div>
    );
}
