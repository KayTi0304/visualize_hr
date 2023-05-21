# VisualiseHR

Revolutionize employees' onboarding experience. It doesn't have to be boring. It doesn't have to be cold Google Docs. <br>
Visualize_HR is a HR onboarding platform for employees to complete their onboarding modules as required by their companies. Companies admin can use this platform to assign modules or make custom modules for their employees. Visualize_HR adds a visual twist to this experience by using OpenGL libraries and Three.js. 

# Tech Stack

Frontend: Vue.js,Three.js, TailwindCSS <br>
Assets: Blender <br>
Backend: Express.js, Axios <br>
Database: CockroachDB Serverless <br>

# Milestones

## Frontend
Created the sign in, sign up, modules, and lesson pages. The most important page of the whole web application is the user (employee)'s user interface. There are some basic assets (the house and the human) where the user can navigate using arrow keys. <br>
On the company side, the company admin user can sign in and create modules or add modules inside. Each module added will be automatically assigned to each employee that is part of the company. <br>

## Backend
Created the models for each needed table. The CRUD operations are working for the backend. The business logic is separated from the frontend and there are functions that deals straight with the read and write of the tables using Sequelize library. <br>

# How To Run it
1. First clone the project. <br>
2. Open a new terminal, type `cd server` and then run `node index.js`. <br>
3. Open another new terminal, type `cd client` and then run `npm run server`. <br>
4. Open a browser at http://localhost:8080/. 
