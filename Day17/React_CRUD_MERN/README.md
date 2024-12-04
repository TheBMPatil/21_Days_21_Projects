
# React_MERN_MongoDB_CRUD

A CRUD (Create, Read, Update, Delete) application built using the MERN stack (MongoDB, Express, React, Node.js). This project allows users to add, view, edit, and delete user records.

## Features
- **Create User:** 
  - Allows users to create new user records.
- **User List:** 
  - Displays a list of all users with the option to update or delete them.
- **Update User:** 
  - Allows editing of user details (name, email, age).
- **Delete User:** 
  - Users can be removed from the database.
- **CRUD Operations:** 
  - Implemented backend functionality for creating, reading, updating, and deleting users.
  
## Tech Stack
- **React:** For building the component-based user interface.
- **React Router:** For navigation between pages (Create, Update, List).
- **Node.js & Express:** For backend API and server management.
- **MongoDB:** For data storage.
- **Axios:** For making HTTP requests to the backend.

## Backend Setup

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/React_MERN_MongoDB_CRUD.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```
   The server will be running on `http://localhost:3001`.

### MongoDB Setup
1. Install MongoDB on your machine (or use MongoDB Atlas).
2. Ensure MongoDB is running on your local machine (default port: 27017) or set up your MongoDB URI in the `server.js` file.

## Frontend Setup

### Installation
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173` to view the app.

## Learnings
- Building a full-stack CRUD application using the MERN stack (MongoDB, Express, React, Node.js).
- Implementing API endpoints for user management (Create, Read, Update, Delete).
- Using Axios to make HTTP requests from React to the backend.
- Handling dynamic routing in React with React Router.
- Integrating MongoDB for persistent data storage.
