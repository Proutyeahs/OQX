import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import EventForm from '../EventForm/EventForm';
import MedicalScientific from '../MedicalScientific/MedicalScientific';
import BusinessCultural from '../BusinessCultural/BusinessCultural';
import PoliticalLegal from '../PoliticalLegal/PoliticalLegal';
import EventFormEdit from '../EventFormEdit/EventFormEdit';
import EventReview from '../EventReview/EventReview'
import EventDetail from '../EventDetail/EventDetail';
import UserStoriesForm from '../UserStoriesForm/UserStoriesForm'
import UserStoriesReview from '../UserStoriesReview/UserStoriesReview';
import ResourcesPage from '../ResourcesPage/ResourcesPage.jsx';
import ResourcesReview from '../ResourcesReview/ResourcesReview';
import ResourceForm from '../ResourceForm/ResourceForm';
import ResourceFormEdit from '../ResourceFormEdit/ResourceFormEdit';
import SponsorsPage from '../SponsorsPage/SponsorsPage'
import SponsorsReview from '../SponsorsReview/SponsorsReview';
import SponsorForm from '../SponsorForm/SponsorForm'
import SponsorFormEdit from '../SponsorFormEdit/SponsorFormEdit';
import './App.css';


function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>


          {/* LOGIN AND REGISTER BUTTON  */}
          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/medicalScientific" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/medicalScientific" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>
          {/* END OF THE OLD INPUT BUTTON */}

          {/* timeline route */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/medicalScientific"
          >
            <MedicalScientific />

          </Route>
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/businessCultural"
          >
            <BusinessCultural />
          </Route>

          {/* timeline route */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/politicalLegal"
          >
            <PoliticalLegal />
          </Route>

          {/* route to add events */}
          <ProtectedRoute
            exact
            path="/eventForm"
          >
            <EventForm />
          </ProtectedRoute>

{/* Route to edit event */}
          <ProtectedRoute
            exact
            path="/eventFormEdit/:id"
          >
            {user.admin ?
              <EventFormEdit />
              :
              <MedicalScientific />
            }
          </ProtectedRoute>

{/* Route to edit resources */}
          <ProtectedRoute
            exact
            path="/resourceFormEdit/:id"
          >
            {user.admin ?
              <ResourceFormEdit />
              :
              <ResourcesPage />
            }
          </ProtectedRoute>

{/* Route to edit sponsors */}
<ProtectedRoute
            exact
            path="/sponsorFormEdit/:id"
          >
            {user.admin ?
              <SponsorFormEdit />
              :
              <SponsorsPage />
            }
          </ProtectedRoute>


          <ProtectedRoute
            exact
            path="/eventReview"
          >
            {user.admin ?
              <EventReview />
              :
              <MedicalScientific />
            }
          </ProtectedRoute>

          {/* Route to review resources, visible only to admin */}
          <ProtectedRoute
            exact
            path="/resourceReview"
          >
            {user.admin ?
              <ResourcesReview />
              :
              <ResourcesPage />
            }
          </ProtectedRoute>

          {/* Route to review sponsors, visible only to admin */}
          <ProtectedRoute
            exact
            path="/sponsorReview"
          >
            {user.admin ?
              <SponsorsReview />
              :
              <SponsorsPage />
            }
          </ProtectedRoute>

          {/* Route to post resources, visible only to admin */}
          {/* when a user accesses this route, we check to see if they are an admin */}
          {/*  ternary operator ( : ) true/false condition */}
          {/* if the user is admin, show first route, otherwise, show the other */}
          {/* if admin is logged in, they will view the form to add a new resource, otherwise they will view the page of resources available to everyone */}
          <ProtectedRoute
            exact
            path="/resourceForm"
          >
            {user.admin ?
              <ResourceForm />
              :
              <ResourcesPage />
            }
          </ProtectedRoute>

          {/* Route to post a new sponsor, only visible to admin */}
          <ProtectedRoute
            exact
            path="/sponsorForm"
          >
            {user.admin ?
              <SponsorForm />
              :
              <SponsorsPage />
            }
          </ProtectedRoute>

          <Route
            // visible to all users logged in or logged out
            exact
            path="/sponsors"
          >
            <SponsorsPage />
          </Route>

          <Route
            exact
            path="/resources"
          >
            <ResourcesPage />
          </Route>

          <Route
            // shows EventDetail at all times (logged in or not)
            exact
            path="/eventDetail/:id"
          >
            <EventDetail />
          </Route>

          {/* route to add User Stories */}
          <ProtectedRoute
            exact
            path="/userStoriesForm/:id"
          >
            <UserStoriesForm />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/userStoriesReview"
          >
            {user.admin ?
              <UserStoriesReview />
              :
              <MedicalScientific />
            }
          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
