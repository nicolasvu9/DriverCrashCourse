import React, { useState } from 'react';
import CreatePracticeQuestion from './CreatePracticeQuestion';
import EditPracticeQuestion from './EditPracticeQuestion';
import UserSuggestedQuestion from './UserSuggestedQuestion';
import './AdministrativePage.css';

const AdministrativePage = () => {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showSuggestionModal, setShowSuggestionModal] = useState(false);
    return (
        <div className="admin-page">
            <h1 className="page-title">Hi, Admin</h1>
            <div className="button-container">
                <button className="admin-button" onClick={() => setShowCreateModal(true)}>Create a New Practice Question</button>
                <button className="admin-button" onClick={() => setShowEditModal(true)}>Edit Practice Questions</button>
                <button className="admin-button" onClick={() => setShowSuggestionModal(true)}>User Suggested Questions</button>
            </div>

            {showCreateModal && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={() => setShowCreateModal(false)}>&times;</button>
                        <CreatePracticeQuestion onClose={() => setShowCreateModal(false)} />
                    </div>
                </div>
            )}

            {showEditModal && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={() => setShowEditModal(false)}>&times;</button>
                        <EditPracticeQuestion onClose={() => setShowEditModal(false)} />
                    </div>
                </div>
            )}

            {showSuggestionModal && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={() => setShowSuggestionModal(false)}>&times;</button>
                        <UserSuggestedQuestion onClose={() => setShowSuggestionModal(false)} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdministrativePage;
