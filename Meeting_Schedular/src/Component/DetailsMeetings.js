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
        
            <h1>MeetingID : {data.MeetingID}</h1>
                <h1>OrganizerName : {data.OrganizerName}</h1>
                <h1>ParticipantName : {data.ParticipantName}</h1>
                <h1>Date : {data.Date}</h1>
                <h1>Time : {data.Time}</h1>
                <button className="btn btn-primary" onClick={()=>{
                    fetch("http://localhost:5000/"+params.MeetingID,{
                        method:"PUT"
                    })
                    .then(()=>{
                        navigate("/meetings");
                    })
                }}>Update</button>&nbsp;
                <button className="btn btn-danger" onClick={()=>{
                    fetch("http://localhost:5000/"+params.MeetingID,{
                        method:"DELETE"
                    })
                    .then(()=>{
                        navigate("/meetings");
                    })
                }}>Delete</button>
        </>
    )
}
