import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./TopNav.js";
import ProgressPage from "./progressPage.js";
import SuggestionPage from "./Suggestions";
import MockExamPage from "./MockExamPage";
//import FlashCardPage from "./FlashCardPage";
//import SuggestionPage from "./SuggestionPage";
import Video from "./Video";
import Footer from "./Footer";
import PracticeQuestionDone from "./PracticeQuestionDone";

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
        <Route
          path="/practiceQuestionDone"
          exact
          component={PracticeQuestionDone}
        />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
