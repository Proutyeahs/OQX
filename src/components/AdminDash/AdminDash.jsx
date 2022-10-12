import React from 'react';
import './AdminDash.css';
import '@fontsource/roboto';
import { Link } from 'react-router-dom';
function AdminDash() {


    return (
        <div className="dash">
            <h1>Admin Dashboard</h1>
            <h1>Create</h1>
   
            <Link to="/eventForm" class="link">
                Create Event
            </Link>

            <Link to="/sponsorForm" class="link">
                Add Sponsor
            </Link>

            <Link to="/resourceForm" class="link">
                Add Resource
            </Link>

            <h2>Review</h2>
            <h6>Approve events and user stories,</h6>
            <h6>edit and delete sponsors and resources</h6>

            <Link to="/eventReview" class="link">
                Review Events
            </Link>

            <Link to="/userStoriesReview" class="link">
                Review Stories
            </Link>

            <Link to="/resourceReview" class="link">
                Review Resources
            </Link>

            <Link to="/sponsorReview" class="link">
                Review Sponsors
            </Link>

        </div>
    );
}

export default AdminDash;
