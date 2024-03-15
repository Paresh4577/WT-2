import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios';
// import DetailsFac from './DetailsFac';
export default function Home() {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Axios.get('http://localhost:5000/Meetings')
            .then(res => setData(res.data)) // Extract data from the response
            .catch(error => console.error("Error fetching data:", error));
    }, []);


    // useEffect(async function () {
    //     const url = 'http://localhost:5000/';
    //     fetch(url)
    //     .then((res)=>{
    //        return res.json();
    //     })
    //     .then((res)=>{
    //         setData(res);   
    //     })
    // },[]);

    return (
        <>
            <div className="container mt-3">
                <div className="row text-center">
                    <div className="col-12 mb-3">
                    <button className="btn btn-primary"conClick={()=>{
                    navigate('../AddFaculty/')
                }}>Add New Meetings</button>
                    </div>
                    </div>

                    <div className="row">
                
                
                    {data.map((e) => {
                        return (
                            <>

                                <div className="col">
                                    {e.MeetingID}
                                </div>
                                <div className="col">
                                    {e.OrganizerName}
                                </div>
                                <div className="col">
                                    {e.ParticipantName}
                                </div>
                                <div className="col">
                                    {e.Date}
                                </div>
                                <div className="col">
                                    {e.Time}
                                </div>
                                <div className="col">
                                <Link to={'./DetailsMeetings/' + e.MeetingID}>
                                    <button className="btn btn-primary">Details</button>
                                </Link>
                                </div>


                            </>
                        )
                    })}
                </div>
            </div>
        </>

    )

}