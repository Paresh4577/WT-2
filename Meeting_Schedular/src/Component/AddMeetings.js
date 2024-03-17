import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Registration() {

  const [MeetingID, setMeetingID] = useState("");
  const [OrganizerName, setOrganizerName] = useState("");
  const [ParticipantName, setParticipantName] = useState("");
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/add", {
      MeetingID: MeetingID,
      OrganizerName: OrganizerName,
      ParticipantName: ParticipantName,
      Date: Date,
      Time: Time
    })
    .then(()=>{
      navigate('/')
    })
  };

  return (
    <>
    <h1 className='text-center mt-3'>Add a New Meeting Schedule</h1>
      <form class="row g-3" onSubmit={handleSubmit}>
        <div class="col-md-12">
          <label for="inputEmail4" class="form-label">Add MeetingID</label>
          <input type="text" class="form-control" id="inputEmail4" onChange={(e)=>{
            setMeetingID(e.target.value);
          }}/>
        </div>  
        <div class="col-12">
          <label for="inputAddress" class="form-label">Add OrganizerName</label>
          <input type="text" class="form-control" id="inputAddress"  onChange={(e)=>{
            setOrganizerName(e.target.value);
          }} />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">Add ParticipantName</label>
          <input type="text" class="form-control" id="inputAddress2"  onChange={(e)=>{
            setParticipantName(e.target.value);
          }} />
        </div>
        <div class="col-md-12">
          <label for="inputCity" class="form-label">Add Date</label>
          <input type="date" class="form-control" id="inputCity" onChange={(e)=>{
            setDate(e.target.value);
          }} />
        </div>
        <div class="col-md-12">
          <label for="inputCity" class="form-label">Add Time</label>
          <input type="time" class="form-control" id="inputCity" onChange={(e)=>{
            setTime(e.target.value)
          }} />
        </div>
 
        <div class="col-12">
          <button type="submit"  style={{ marginLeft : '480px' }}class="btn btn-primary">Add New Meeting</button>
        </div>
      </form>
    </>
  )



}