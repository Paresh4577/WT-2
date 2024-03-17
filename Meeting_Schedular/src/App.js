import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Layout from './Component/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailsMeetings from './Component/DetailsMeetings';
import AddMeetings from './Component/AddMeetings';
import UpdateMeetings from './Component/UpdateMeeting';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/Contact" element={<Contact />} />
            <Route path="/res" element={<Registration />} />
            <Route path="/UpdateForm/:name" element={<UpdateForm />} />*/}
            <Route path="/DetailsMeetings/:MeetingID" element={<DetailsMeetings />} /> 
            <Route path="/AddMeetings/add" element={<AddMeetings />} /> 
            <Route path="/UpdateMeetings/:MeetingID" element={<UpdateMeetings />} /> 
          </Route>
        </Routes> 
      </BrowserRouter>
    
    </>
  );
}

export default App;
