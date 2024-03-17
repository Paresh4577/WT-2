import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailsMeetings() {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        fetch("http://localhost:5000/" + params.MeetingID)
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            console.log(res);
            setData(res);
        })
    },[]);



    return (
        <>
           <div className="row me-3 mt-4 text-center">
            <h1>MeetingID : {data.MeetingID}</h1>
                <h1>OrganizerName : {data.OrganizerName}</h1>
                <h1>ParticipantName : {data.ParticipantName}</h1>
                <h1>Date : {data.Date}</h1>
                <h1>Time : {data.Time}</h1>
                <div className="col">
                <button className="btn btn-primary" onClick={()=>{
                    navigate('/UpdateMeetings/'+params.MeetingID)
                }}>Update</button>
                </div>
                <div className="col text-center">
                <button className="btn btn-danger" onClick={()=>{
                    fetch("http://localhost:5000/"+params.MeetingID,{
                        method:"DELETE"
                    })
                    .then(()=>{
                        navigate("/");
                    })
                }}>Delete</button>
                </div>
                
                </div>
        </>
    )
}
