import React, { useState, useEffect } from "react";
import "./MockExamPage.css";
import MockExamQuestions from "./MockExamQuestions.js";
import Footer from "./Footer";

const MockExamPage = () => {
  const [mockExams] = useState([
    { _id: 1 },
    { _id: 2 },
    { _id: 3 },
    // Add more mock exams as needed
  ]);
  const [selectedMockExamId, setSelectedMockExamId] = useState(null);
  const [showStartModal, setShowStartModal] = useState(false);
  const [showExamQuestions, setShowExamQuestions] = useState(false);


  const handleStartTest = (mockExamId) => {
    setSelectedMockExamId(mockExamId);
    setShowStartModal(true);
  };

  const handleStartExam = () => {
    setShowStartModal(false);
    setShowExamQuestions(true);
  };

  const handleBackToMockExamPage = () => {
    
    setShowExamQuestions(false);
    
  };



  return (
    <div className="mock-exam-page">
      {showExamQuestions ? (
        <MockExamQuestions
          mockExamId={selectedMockExamId}
          onBackButtonClick={handleBackToMockExamPage}
        />
      ) : (
        <>
          <h1 className="page-title">Mock Exam</h1>
          <table>
            <thead>
              <tr>
                <th>Mock Exam ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mockExams.map((mockExam) => (
                <tr key={mockExam._id}>
                  <td>Mock Exam {mockExam._id}</td>
                  <td>
                    <button 
                    className="mockbutton" 
                    onClick={() => handleStartTest(mockExam._id)}>
                      Start the test
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {showStartModal && (
            <div className="modal">
              <div className="modal-content">
                <button
                  className="close-button"
                  onClick={() => setShowStartModal(false)}
                >
                  &times;
                </button>
                <StartTestContent
                  mockExamId={selectedMockExamId}
                  onStartExam={handleStartExam}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const StartTestContent = ({ mockExamId, onStartExam }) => {
  // Customize the content related to starting the test
  return (
    <div className="start-test-content">
      <h2>Start the Test</h2>
      <p>You've chosen Test ID: {mockExamId}</p>
      <button onClick={onStartExam}>Start the Exam</button>
    </div>
  );
};

export default MockExamPage;
