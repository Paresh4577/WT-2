import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddFaculty() {
    var apiUrl = "https://65e1e385a8583365b3178e49.mockapi.io/api/p1/Students"
    const [data, setData] = useState([]);
    const id = useParams();
    const navigate = useNavigate();


    return (
        <>
            <div className="row">
                Name : <input type="text" onChange={(e) => {
                    setData({ ...data, name: e.target.value });
                }} />

                Roll No : <input type="text" onChange={(e) => {
                    setData({ ...data, roll_no: e.target.value });
                }} />

                Department : <input type="text" onChange={(e) => {
                    setData({ ...data, department: e.target.value });
                }} />

                SEMESTER : <input type="text" onChange={(e) => {
                    setData({ ...data, sem: e.target.value });
                }} />

                Image : <input type="text" onChange={(e) => {
                    setData({ ...data, image: e.target.value });
                }} />

                <button type="submit"  onClick={()=>{
                    fetch(apiUrl,{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                      .then((res) =>
                      navigate(-1)
                        )
                        
                }}>Add</button>


            </div>
        </>
    )
}