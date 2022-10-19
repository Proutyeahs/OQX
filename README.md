
# OQX
## Our Queer HxStory

## Table of Contents
- [Description](https://github.com/Proutyeahs/OQX/blob/main/README.md#description)
- [Built With](https://github.com/Proutyeahs/OQX/blob/main/README.md#built-with)
- [Prerequisites](https://github.com/Proutyeahs/OQX/blob/main/README.md#prerequisites)
- [Installation](https://github.com/Proutyeahs/OQX/blob/main/README.md#installation)
- [Usage](https://github.com/Proutyeahs/OQX/blob/main/README.md#usage)

## Description

LGBTQ literature and educational resources are often barred behind paywalls and complex language.

Our Queer Hxstory creates a platform for people to access three educational timelines: political/legal, medical/scientific, and business/cultural. All at no cost and accessible for people as young as ten.

Now, the LGBTQ story is available to all reading levels and all educational levels. OQX gives you clean timelines that you can click into and explore the consequential events that still impact us all today. Whether you are discovering queer history for the first time, or diving deep into the research, Our Queer Hxstory opens the doors for you.

## Built With

<img src="https://user-images.githubusercontent.com/25181517/192107854-765620d7-f909-4953-a6da-36e1ef69eea6.png" alt="HTML" height=48 width=auto> <img src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="REST" height=48 width=auto> <img src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="GIT"  height=48 width=auto> <img src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png" alt="Github" height=48 width=auto> <img src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="VS Code" height=48 width=auto> <img src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png" alt="Postman" height=48 width=auto> <img src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" height=48 width=auto> <img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" height=48 width=auto> <img src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png" alt="Figma" height=48 width=auto> <img src="https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png" alt="Material UI" height=48 width=auto> <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" height=48 width=auto> <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" height=48 width=auto> <img src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="NPM" height=48 width=auto> <img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" height=48 width=auto> <img src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" alt="Redux" height=48 width=auto> <img src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" height=48 width=auto> 



## Getting Started

This project should run in your chosen IDE

### Prerequisites

[Node.js](https://nodejs.org/en/)

### Installation

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
Video walkthrough of application usage: [Instructional Video](https://youtu.be/WRLI0xG9uQU)

## Technologies used:

Node.js, React, Redux, Express, Passport, and PostgreSQL 

(a full list of dependencies can be found in `package.json`).

## Link to hosted application:

[Link to Deployed Site](https://calm-savannah-19126.herokuapp.com/#/medicalScientific)
