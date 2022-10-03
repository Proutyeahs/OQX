import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <h1>Our Queer Hxstory</h1>
      <div>
        <p>
          LGBTQ literature and educational resources are often barred behind paywalls and complex language.
          <br></br>
          Our Queer Hxstory creates a platform for people to access three educational timelines: political/legal, medical/scientific, and business/cultural. All at no cost and accessible for people as young as ten.
          <br></br>
          Now, the LGBTQ story is available to all reading levels and all educational levels. OQX gives you clean timelines that you can click into and explore the consequential events that still impact us all today. Whether you are discovering queer history for the first time, or diving deep into the research, Our Queer Hxstory opens the doors for you. 
          <br></br>
          <a href="https://ourqueerhxtory.com">Please Consider Donating to OQX</a>
</p>
      </div>
    </div>
  );
}

export default AboutPage;
