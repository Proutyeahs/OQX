import React from 'react';
import './AdminDash.css';
import '@fontsource/roboto';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function AdminDash() {

    const history = useHistory();

    return (
        <div className="center">
        <h1 id="title" className="font-bold">Admin Dashboard</h1>

            
            <h2 className="font-bold">Review</h2>

            <Button sx={{backgroundColor:"white"}} className="link" variant="outlined" onClick={() => history.push('/eventReview')}>
                Review Events
            </Button>

            <Button sx={{backgroundColor:"white"}} className="link" variant="outlined" onClick={() => history.push('/userStoriesReview')}>
                Review Stories
            </Button>

            <h2 className="font-bold">Create</h2>

            <Button sx={{backgroundColor:"white"}} className="link" variant="outlined" color="success" onClick={() => history.push('/resourceForm')}>
                Add Resource
            </Button>

            <Button sx={{backgroundColor:"white"}} className="link" variant="outlined" color="success" onClick={() => history.push('/sponsorForm')}>
                Add Sponsor
            </Button>
            <br></br>
            <Button sx={{backgroundColor:"white"}} className="link" variant="outlined" onClick={() => history.push('/resourceReview')}>
                Review Resources
            </Button>

            <Button sx={{backgroundColor:"white"}} className="link" variant="outlined" onClick={() => history.push('/sponsorReview')}>
                Review Sponsors
            </Button>

        </div>
    );
}

export default AdminDash;
