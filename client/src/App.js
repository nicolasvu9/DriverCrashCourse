import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav.js";
import ProgressPage from "./components/progressPage.js";
import SuggestionPage from "./components/Suggestions";
import MockExamPage from "./components/MockExamPage";
//import FlashCardPage from "./FlashCardPage";
import ProtectedRoute from './utils/ProtectedRoute';
import Video from "./components/Video";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage.js";
import DashBoard from "./components/Dashboard.js";
import LandingPage from "./components/LandingPage.js";
import AdministrativePage from './components/AdministrativePage';
const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/admin" element={<ProtectedRoute element={<AdministrativePage />} />} />
        {/*<Route path="/Practice" element={< />} />*/}
        <Route path="/exam" element={<MockExamPage />} />
        {/*<Route path="/FlashCard" element={< />} />*/}
        <Route path="/Progress" element={<ProgressPage />} />
        <Route path="/Suggestion" element={<SuggestionPage />} />
          {/*Its called Resources Page now but the link still works. If it doesnt work Ill fix it but keep it for now.*/}
        <Route path="/Video" element={<Video />} /> 
        <Route path="/LogOut" element={<LandingPage/>} />
      </Routes>

      
    </Router>
  );
};

export default App;

