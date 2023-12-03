import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav.js";
import ProgressPage from "./components/progressPage.js";
import SuggestionPage from "./components/Suggestions";
import MockExamPage from "./components/MockExamPage";
//import FlashCardPage from "./FlashCardPage";
//import SuggestionPage from "./SuggestionPage";
import Video from "./components/Video";
import Footer from "./components/Footer";
import PracticeQuestionDone from "./components/PracticeQuestionDone";

const App = () => {
  return (
    <Router>
      <TopNav />
      <Routes>
        {/*<Route path="/DashBoard" element={< />} />*/}
        {/*<Route path="/Practice" element={< />} />*/}
        <Route path="/exam" element={<MockExamPage />} />
        {/*<Route path="/FlashCard" element={< />} />*/}
        <Route path="/Progress" element={<ProgressPage />} />
        <Route path="/Suggestion" element={<SuggestionPage />} />
        <Route path="/Video" element={<Video />} />
        
        
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
