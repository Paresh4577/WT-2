import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Faculties from './Component/Faculties';
import AddFaculty from './Component/AddFaculty';
import FacDetails from './Component/FacDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 
import Update from './Component/Update';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="mb-3">
          <Navbar />
          <Routes>
            <Route path='/Faculties' element={<Faculties />} />
            <Route path='/AddFaculty' element={<AddFaculty />} />
            <Route path='/faculty/:id' element={<FacDetails />} />
            <Route path='/Update/:id' element={<Update />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
