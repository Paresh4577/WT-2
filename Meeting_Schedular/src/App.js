import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Layout from './Component/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailsMeetings from './Component/DetailsMeetings';
import AddMeetings from './Component/AddMeetings';

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
            <Route path="/add" element={<AddMeetings />} /> 
          </Route>
        </Routes> 
      </BrowserRouter>
    
    </>
  );
}

export default App;
