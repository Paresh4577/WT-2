import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AddFaculty from "./AddFaculty";

export default function GetAllFaculty() {
    var apiUrl = "https://65e1e385a8583365b3178e49.mockapi.io/api/p1/Students"
    const [data, setData] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch(apiUrl)
            .then((res) =>
                res.json()
            ).then((res) => {
                setData(res)
            });
    }, [])


    return (
        <>

            <button className="btn btn-primary" onClick={() => {
                navigate('../AddFaculty')
            }}>Add</button>


            <div className="row">

                {data.map((e) => {
                    return (
                        <>
                        <div className="col-4">
                            <Link to={"../faculty/" + e.id} style={{ textDecoration: 'none' }} >
                                
                                    <div className="card">

                                        <img src={e.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{e.name}</h5>
                                            
                                            <button href="#" className="btn btn-primary" onClick={() => {

                                            }}>View</button>
                                        </div>
                                    </div>
                               
                            </Link>
                            </div>

                        </>
                    )
                })}


            </div>
        </>
    )

}