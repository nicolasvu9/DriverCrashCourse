import React, { useState } from "react";
import "./Suggestions.css";
import Cookies from "js-cookie";
import TopNav from "./TopNav";
import Footer from "./Footer";
import Road from "./road.png";
function Suggestions() {
  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState([
    { choice_text: "", isCorrect: false },
    { choice_text: "", isCorrect: false },
    { choice_text: "", isCorrect: false },
    { choice_text: "", isCorrect: false },
  ]);
  const [explanation, setExplanation] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const handleChoiceChange = (index, event) => {
    if (event.target.name === "isCorrect") {
      setChoices(
        choices.map((choice, i) => ({
          ...choice,
          isCorrect: i === index,
        })),
      );
    } else {
      setChoices(
        choices.map((choice, i) =>
          i === index
            ? { ...choice, [event.target.name]: event.target.value }
            : choice,
        ),
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check if any of the required fields are empty
    if (!questionText.trim() || choices.some(choice => !choice.choice_text.trim()) || !explanation.trim()) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Check if the access token is available
  const accessToken = Cookies.get("access_token");
  if (!accessToken) {
    alert("User not authenticated. Please log in.");
    // You can redirect the user to the login page or handle the situation as needed
    return;
  }
  
    const payload = {
      text: questionText,
      choices,
      correct_answer_explanation: explanation,
    };
  
    try {
      // Use the correct URL and endpoint for suggested questions
      const url = "/api/suggestedquestions"; // Always use the POST endpoint for creating new suggested questions
  
      const response = await fetch(url, {
        method: "POST", // Always use POST for creating new suggested questions
        headers: {
          "Content-Type": "application/json",
          "x-access-token": Cookies.get("access_token"),
        },
        body: JSON.stringify(payload),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      onClose();
      setShowPopup(true);
    } catch (error) {
      console.error("Error submitting suggested question", error);
    }
  };
  
  return (
    <div>
      <TopNav />
      
    <div className="--modal">
      
    <div className="create-question-form">
      <form onSubmit={handleSubmit}>
        <label>Question</label>
        <textarea
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />

        {choices.map((choice, index) => (
          <div key={index} className="choice-item">
            <label>Choice {index + 1}</label>
            <input
              type="text"
              name="choice_text"
              value={choice.choice_text}
              onChange={(e) => handleChoiceChange(index, e)}
            />
            <label>
              <input
                type="radio"
                name="isCorrect"
                checked={choice.isCorrect}
                onChange={(e) => handleChoiceChange(index, e)}
              />
              Correct
            </label>
          </div>
        ))}

        <label>Explanation</label>
        <textarea
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
        />

        <button className="button1" type="submit">Submit</button>
      </form>
    </div>
    
    </div>
    
    <Footer />
    </div>
  );
  
}

export default Suggestions;
