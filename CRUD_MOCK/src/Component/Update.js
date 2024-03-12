import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Update() {
    const params = useParams();
    var apiUrl = "https://65e1e385a8583365b3178e49.mockapi.io/api/p1/Students"
    const [data, setData] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        fetch("https://65e1e385a8583365b3178e49.mockapi.io/api/p1/Students/" + params.id)
            .then((res) =>
                res.json()
            ).then((res) => {
                setData(res)
            });
    }, []);

    const handleSubmit = () => {
        fetch("https://65e1e385a8583365b3178e49.mockapi.io/api/p1/Students/" + params.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((res) =>
                navigate("/Faculties")
            );
    }

    return (
        <>
            <div className="row">
                Name : <input type="text" value={data.name} onChange={(e) => {
                    setData({ ...data, name: e.target.value });
                }} />

                Roll No : <input type="text" value={data.roll_no} onChange={(e) => {
                    setData({ ...data, roll_no: e.target.value });
                }} />

                Department : <input type="text" value={data.department} onChange={(e) => {
                    setData({ ...data, department: e.target.value });
                }} />

                SEMESTER : <input type="text" value={data.sem} onChange={(e) => {
                    setData({ ...data, sem: e.target.value });
                }} />

                Image : <input type="text" value={data.image} onChange={(e) => {
                    setData({ ...data, image: e.target.value });
                }} />
            </div><br></br>
            
            <div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save Changes</button>
            </div>


        </>
    )
}