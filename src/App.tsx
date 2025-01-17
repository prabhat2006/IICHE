import React, { useEffect } from 'react'; // Make sure to import React if required
import { Routes, Route, useLocation } from 'react-router-dom';
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
import Vision from './pages/vision';
import EventsDepartment from './pages/departments/events';
import DesignDepartment from './pages/departments/design';
import EditorialDepartment from './pages/departments/editorial';
import TechnicalDepartment from './pages/departments/technical';
import HRDepartment from './pages/departments/hr';
import ChemSummit from './pages/outFest/chemSummit23';

const MainHome = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToBoardMembers) {
      const boardMembersSection = document.getElementById('board-members');
      if (boardMembersSection) {
        boardMembersSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Events />
      <div id="board-members">
        <BoardMembers />
      </div>
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
        <Route path="/vision" element={<Vision />} /> {/* Fixed conflicting route path */}
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/fests" element={<FestsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/more" element={<MorePage />} />
        <Route path="/departments/events" element={<EventsDepartment />} />
        <Route path="/departments/design" element={<DesignDepartment />} />
        <Route path="/departments/editorial" element={<EditorialDepartment />} />
        <Route path="/departments/technical" element={<TechnicalDepartment />} />
        <Route path="/departments/hr" element={<HRDepartment />} />
        <Route path="/fests/chemsummit23" element={<ChemSummit />} />
      </Routes>
    </div>
  );
};

export default App;
