import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProgressPage from "./components/progressPage.js";
import SuggestionPage from "./components/Suggestions";
import MockExamPage from "./components/MockExamPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import Video from "./components/Video";
import LoginPage from "./components/LoginPage.js";
import DashBoard from "./components/DashboardPage.js";
import LandingPage from "./components/LandingPage.js";
import AdministrativePage from "./components/AdministrativePage";
import PracticeProblemPage from "./components/PracticeProblemPage.js";
import FlashCardsPage from "./components/FlashCardsPage.js";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route
          path="/admin"
          element={<ProtectedRoute element={<AdministrativePage />} />}
        />
        {/*<Route path="/Practice" element={< />} />*/}
        <Route path="/exam" element={<MockExamPage />} />
        <Route path="/flashcard" element={<FlashCardsPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/suggestion" element={<SuggestionPage />} />
        <Route path="/practice" element={<PracticeProblemPage />} />
        {/*Its called Resources Page now but the link still works. If it doesnt work Ill fix it but keep it for now.*/}
        <Route path="/video" element={<Video />} />

      </Routes>
    </Router>
  );
};

export default App;
