
# OQX
## Our Queer HxStory

## Table of Contents
- Description
- Built With
- Prerequisites
- Installation
- Usage

## Description

LGBTQ literature and educational resources are often barred behind paywalls and complex language.

Our Queer Hxstory creates a platform for people to access three educational timelines: political/legal, medical/scientific, and business/cultural. All at no cost and accessible for people as young as ten.

Now, the LGBTQ story is available to all reading levels and all educational levels. OQX gives you clean timelines that you can click into and explore the consequential events that still impact us all today. Whether you are discovering queer history for the first time, or diving deep into the research, Our Queer Hxstory opens the doors for you.

## Built With

<img src="url" alt="alternatetext"> 
<img src="url" alt="alternatetext"> 
<img src="url" alt="alternatetext"> 
<img src="url" alt="alternatetext"> 
<img src="url" alt="alternatetext"> 


## Getting Started

This project should run in your chosen IDE

## Prerequisites

Link to software that is required to install the app:
Node.js https://nodejs.org/en/

## Installation

1. Fork the repository
2. Copy the SSH key in your new repository
3. In your terminal type: `git clone {paste SSH link}`
4. Navigate into the repository's folder in your terminal
5. Open VS Code (or editor of your choice) and open the folder
6. In the terminal of VS Code run `npm install` to install all dependencies
7. Create a `.env` file at the root of the project and paste this line into the file:
`SERVER_SESSION_SECRET=superDuperSecret`
8. Create a database named `OQX_app` in PostgresSQL If you would like to name your database something else, you will need to change `OQX_app` to the name of your new database name in `server/modules/pool.js`
9. The queries in the database.sql file are set up to create all the necessary tables that you need, as well as a dummy data table to test the app. Copy and paste those queries in the SQL query of the database. If this is going to production, leave out the dummy data.
10. Run `npm run server` in your VS Code terminal
11. Open a second terminal and run `npm run client`

## Usage

Once everything is installed and running it should open in your default browser - if not, navigate to `http://localhost:3000/#/`.
Video walkthrough of application usage:

## Technologies used:

Node.js, React, Redux, Express, Passport, and PostgreSQL 

(a full list of dependencies can be found in `package.json`).

## Link to hosted application:

[Link to Deployed Site](https://calm-savannah-19126.herokuapp.com/#/medicalScientific)
