import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AppNav from './component/AppNav';
import Footer from './component/Footer';
import Subscribe from './component/Subscribe';
import TeamPage from './pages/TeamPage';
import ServicePage from './pages/ServicePage';
import ProjectPage from './pages/ProjectPage';
import TestimonialPage from './pages/TestimonialPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppNav/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/team" element={<TeamPage/>}/>
          <Route path="/service" element={<ServicePage/>} />
          <Route path="/project" element={<ProjectPage/>} />
          <Route path="/Testimonials" element={<TestimonialPage/>} />
        </Routes>
        <Subscribe/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
