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
                <div className="row text-right">
                    <div className="col-12 mb-3">
                    <button className="btn btn-success" onClick={()=>{
                    navigate('../AddMeetings/add')
                }}>+</button>
                    </div>
                    </div>

                    <table width={1150}>
                        <div className="row ms-2">
                            <div className="col-2">
                            <th>
                                MeetingID
                            </th>
                            </div>
                            <div className="col-2">
                            <th>
                                OrganizerName
                            </th>
                            </div>
                            <div className="col-2">
                            <th>
                                ParticipantName
                            </th>
                            </div>
                            <div className="col-2">
                            <th>
                                Date
                            </th>
                            </div>
                            <div className="col-2">
                            <th>
                                Time
                            </th>
                            </div>
                            <div className="col-2">
                            <th>
                                Actions
                            </th>
                            </div>
                            </div>
                            <hr/>
                   
                
                
                    {data.map((e) => {
                        return (
                            <>
                                <div className="row mt-3 mb-2 ms-2">
                                <div className="col">
                                    <td>
                                    {e.MeetingID}
                                    </td>
                                </div>
                                <div className="col">
                                    <td>
                                    {e.OrganizerName}
                                    </td>
                                </div>
                                <div className="col">
                                    <td>
                                    {e.ParticipantName}
                                    </td>
                                </div>
                                <div className="col">
                                    <td>
                                    {e.Date}
                                    </td>
                                </div>
                                <div className="col">
                                    <td>
                                    {e.Time}
                                    </td>
                                </div>
                                <div className="col">
                                <Link to={'./DetailsMeetings/' + e.MeetingID}>
                                    <button className="btn btn-secondary">Details</button><br></br>
                                </Link>
                                </div>
                                </div>
                                <hr/>
                                


                            </>
                        )
                    })}

                         
            </table>
                
            </div>
        </>

    )

}