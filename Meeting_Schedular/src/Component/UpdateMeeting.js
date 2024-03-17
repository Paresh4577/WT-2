import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateMeetings() {
    const params = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({
        MeetingID: "",
        OrganizerName: "",
        ParticipantName: "",
        Date:"",
        Time:""
    });

    const handleSubmit = (e) => {
      e.preventDefault();
        fetch("http://localhost:5000/" + params.MeetingID, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(() => {
                navigate("/");
            })
    }


    useEffect(() => {
        fetch("http://localhost:5000/" + params.MeetingID)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res);
                setData(res);
            })
    }, [])

    return (
        <>
        <h1 className='text-center mt-3'>Update a Meeting Schedule</h1>
            <form class="row g-3 mt-3" onSubmit={handleSubmit}>
                <div class="col-md-12">
                    <label for="inputEmail4" class="form-label">Add MeetingID</label>
                    <input type="text" class="form-control" id="inputEmail4" value={data.MeetingID} onChange={(e) => {
                        setData({...data,MeetingID : e.target.value});
                    }} />
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Add OrganizerName</label>
                    <input type="text" class="form-control" id="inputAddress" value={data.OrganizerName} onChange={(e) => {
                       setData({...data,OrganizerName : e.target.value});
                    }} />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Add ParticipantName</label>
                    <input type="text" class="form-control" id="inputAddress2" value={data.ParticipantName} onChange={(e) => {
                        setData({...data,ParticipantName : e.target.value});
                    }} />
                </div>
                <div class="col-md-12">
                    <label for="inputCity" class="form-label">Add Date</label>
                    <input type="date" class="form-control" id="inputCity" value={data.Date} onChange={(e) => {
                       setData({...data,Date : e.target.value});
                    }} />
                </div>
                <div class="col-md-12">
                    <label for="inputCity" class="form-label">Add Time</label>
                    <input type="time" class="form-control" id="inputCity" value={data.Time} onChange={(e) => {
                        setData({...data,Time : e.target.value});
                    }} />
                </div>

                <div class="col-12">
                    <button type="submit" style={{ marginLeft: '480px' }} class="btn btn-primary">Update</button>
                </div>
            </form>
        </>
    )

}