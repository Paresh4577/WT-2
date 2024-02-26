import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Fac from './Component/Fac'
import Navbar from './Component/Navbar';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import About from './Component/About';
import Contact from './Component/Contact';
import Layout from './Component/Layout';
import Counter from './Component/Counter';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
       <Route path='faculty' element={<Fac/>}></Route>
       <Route path='Counter' element={<Counter/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='about' element={<About/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  
          
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
