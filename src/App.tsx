import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import BoardMembers from './components/BoardMembers';
import Alumni from './components/Alumni';
import Footer from './components/Footer';
import CommitteePage from './pages/committee';
import DepartmentsPage from './pages/departments';
import FestsPage from './pages/fests';
import BlogsPage from './pages/blogs';
import EventsPage from './pages/events';
import MorePage from './pages/more';
import AchievementsPage from './pages/achievements';

const MainHome = () => {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <BoardMembers />
      <Alumni />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <div className="bg-dark min-h-screen text-white">
      <Header />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/committee" element={<CommitteePage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/fests" element={<FestsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/more" element={<MorePage />} />
      </Routes>
    </div>
  );
};

export default App; 