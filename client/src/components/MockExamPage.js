import React, { useState, useEffect } from "react";
import "./MockExamPage.css";
import MockExamQuestions from "./MockExamQuestions.js";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import TopNav from "./TopNav.js";
const MockExamPage = () => {
  const [mockExams, setMockExams] = useState([]);
  const [selectedMockExamId, setSelectedMockExamId] = useState(null);
  const [showStartModal, setShowStartModal] = useState(false);
  const [showExamQuestions, setShowExamQuestions] = useState(false);
  // Retrieve values from cookies
  const accessToken = Cookies.get('access_token');

  useEffect(() => {
    const fetchMockExams = async () => {
      try {
        const response = await fetch('/api/mockexams', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': Cookies.get('access_token'),
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch mock exams');
        }

        const data = await response.json();
        
        setMockExams(data);
      } catch (error) {
        console.error('Error fetching mock exams', error);
      }
    };

    fetchMockExams();
  }, [accessToken]);

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
      <TopNav />
      {showExamQuestions ? (
        <MockExamQuestions
          mockExamId={selectedMockExamId}
          onBackButtonClick={handleBackToMockExamPage}
        />
      ) : (
        <>
          <h1 className="mock-page-title">Mock Exam</h1>
          <table>
            <thead>
              <tr>
                <th>Mock Exam Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mockExams.map((mockExam) => (
                <tr key={mockExam._id}>
                  <td>{mockExam.name}</td>
                  <td>
                    <button
                      className="mockbutton"
                      onClick={() => handleStartTest(mockExam._id)}
                    >
                      Start the test
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {showStartModal && (
            <div className="mock-modal">
              <div className="mock-modal-content">
                <button
                  className="mock-close-button"
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
      <Footer />
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
