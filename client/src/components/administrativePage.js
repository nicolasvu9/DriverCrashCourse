import React, { useState } from 'react';
import CreatePracticeQuestion from './CreatePracticeQuestion';

function AdministrativePage() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleSubmitQuestion = (newQuestion) => {
    fetch('/api/practicequestions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newQuestion),
    })
    .then(response => response.json())
    .then(data => {
      alert('Question created successfully');
      setShowCreateModal(false);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <h1>Driver Crash Course - Administrative Page</h1>
      <button onClick={() => setShowCreateModal(true)}>Create Questions</button>
      <CreatePracticeQuestion 
        show={showCreateModal} 
        handleClose={() => setShowCreateModal(false)} 
        handleSubmit={handleSubmitQuestion} 
      />
      {/* TODO: Other components and logic */}
    </div>
  );
}

export default AdministrativePage;