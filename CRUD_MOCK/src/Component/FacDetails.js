import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AddFaculty from "./AddFaculty";
import Update from "./Update";

export default function FacDetails() {
    const params = useParams();
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


    return (
        <>
            <button className="btn btn-primary" onClick={() => {
                navigate('../Faculties')
            }}>Back</button>
            <div className="container text-center">
                <h1>Name : {data.name}</h1>
                <h3>Roll No : {data.roll_no}</h3>
                <h3>Department : {data.department}</h3>
                <h3>Semester : {data.sem}</h3>
                <img src={data.image} className="card-img-top w-auto h-5" alt="..." />
                <br></br><br></br>
                
                <button className='btn btn-primary' onClick={
                      () => {
                        navigate('/Update/' + data.id);
                      }
                    }>Update</button>&nbsp;
                 
                <button className="btn btn-danger" onClick={() => {
                    fetch("https://65e1e385a8583365b3178e49.mockapi.io/api/p1/Students/" + params.id, {
                        method: "DELETE"
                    })
                        .then((res) =>
                            navigate("/Faculties")
                        );
                }}>Delete</button>
            </div>
        </>
    )
}