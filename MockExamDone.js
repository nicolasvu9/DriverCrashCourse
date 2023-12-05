// MockExamDone.js
import React, { useState, useEffect } from "react";
import "./MockExamDone.css"; // Adjust the path as needed

const MockExamDone = ({ onGoBack }) => {
  const [mockExams, setMockExams] = useState([]);
  useEffect(() => {
    const fetchMockExams = async () => {
      try {
        const response = await fetch("/api/mockexams", {
          // Add headers or other options as needed
        });

        if (!response.ok) {
          throw new Error("Failed to fetch mock exams");
        }

        const data = await response.json();
        setMockExams(data);
      } catch (error) {
        console.error("Error fetching mock exams", error);
      }
    };

    fetchMockExams();
  }, []);

  return (
    <div className="mock-exam-done">
      <h2>Mock Exams with Scores</h2>
      
      {mockExams.map((mockExam) => (
        <div key={mockExam.mock_exam_id}>
          <h3>Mock Exam ID: {mockExam.mock_exam_id}</h3>
          <p>User ID: {mockExam.user_id}</p>
          <p>Top Result: {mockExam.top_result}%</p>

          <h4>Questions:</h4>
          <ul>
            {mockExam.questions.map((question, index) => (
              <li key={index}>
                <p>Text: {question.text}</p>
                <p>Explanation: {question.correct_answer_explanation}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <button className="button" onClick={onGoBack}>
        Go Back
      </button>
    </div>
  );
};


export default MockExamDone;
