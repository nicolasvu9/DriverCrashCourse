import React, { useState } from 'react';
import CreatePracticeQuestion from './CreatePracticeQuestion';
import EditPracticeQuestion from './EditPracticeQuestion';
import './AdministrativePage.css'; // Importing CSS

const AdministrativePage = () => {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    return (
        <div className="admin-page">
            <h1 className="page-title">Hi, Admin</h1>
            <div className="button-container">
                <button className="admin-button" onClick={() => setShowCreateModal(true)}>Create Practice Questions</button>
                <button className="admin-button" onClick={() => setShowEditModal(true)}>Edit Practice Questions</button>
                <button className="admin-button">New Questions From Users</button> {/* Adjust as needed for functionality */}
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
        </div>
    );
};

export default AdministrativePage;
