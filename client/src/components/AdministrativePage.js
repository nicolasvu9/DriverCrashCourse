import React, { useState } from 'react';
import CreatePracticeQuestion from './CreatePracticeQuestion';
import EditPracticeQuestion from './EditPracticeQuestion';
import UserSuggestedQuestion from './UserSuggestedQuestion';
import Footer from './Footer'
import TopNav from './TopNav'
import './AdministrativePage.css';

const AdministrativePage = () => {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showSuggestionModal, setShowSuggestionModal] = useState(false);
    return (
        <div className="admin-page">
            <TopNav />
            <h1 className="page-title">Hi, Admin</h1>
            <div className="admin-button-container">
                <button className="admin-button" onClick={() => setShowCreateModal(true)}>Create a New Practice Question</button>
                <button className="admin-button" onClick={() => setShowEditModal(true)}>Edit Practice Questions</button>
                <button className="admin-button" onClick={() => setShowSuggestionModal(true)}>User Suggested Questions</button>
            </div>

            {showCreateModal && (
                <div className="create-modal">
                    <div className="create-modal-content">
                        <button className="close-button" onClick={() => setShowCreateModal(false)}>&times;</button>
                        <CreatePracticeQuestion onClose={() => setShowCreateModal(false)} />
                    </div>
                </div>
            )}

            {showEditModal && (
                <div className="edit-modal">
                    <div className="edit-modal-content">
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

            <Footer />
        </div>
    );
};

export default AdministrativePage;
