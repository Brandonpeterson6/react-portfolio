import React, { useState } from "react";
import Nav from './components/Nav/Nav';
import About from './components/about/about';
import ContactForm from './components/contact/contact';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Footer from './components/footer/footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const[pages] = useState([
Resume, Portfolio])
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);
  const [currentPage, setCurrentPage] = useState({About});

  return (
    <Router>
      
    <div>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        setAboutSelected={aboutSelected}
      />
      <Routes>
        <Route exact path="/" element={<About/>} />
        <Route exact path="/ContactForm" element={<ContactForm/>} />
        <Route exact path="/Portfolio" element={<Portfolio/>} />
        <Route exact path="/Resume" element={<Resume/>} />
      </Routes>
      <Footer/>
    </div>

    </Router>
  );
}
