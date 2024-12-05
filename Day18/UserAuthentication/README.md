
# React_Authentication_System

A full-stack authentication system built using React, Node.js, Express, MongoDB, and JWT for user authentication. This project allows users to register, log in, and maintain their authentication state.

## Features
- **User Registration:** 
  - Allows users to create a new account with email, password, and username.
- **User Login:** 
  - Users can log in to the application by providing their credentials (email and password).
- **JWT Authentication:** 
  - Implements JSON Web Token (JWT) for secure and stateless authentication.
- **Session Persistence:** 
  - Authentication state is maintained using local storage for persistent login.
- **Logout Functionality:** 
  - Users can log out to terminate their session.

## Tech Stack
- **React:** For building the component-based user interface.
- **React Router:** For navigation between the login and registration pages.
- **Node.js & Express:** For backend API and server management.
- **MongoDB:** For data storage of user records.
- **JWT (JSON Web Token):** For secure authentication and session management.
- **Axios:** For making HTTP requests to the backend.

## Backend Setup

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/React_Authentication_System.git
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
   The server will be running on `http://localhost:3000`.

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
- Building a full-stack authentication system using React, Node.js, Express, MongoDB, and JWT.
- Implementing secure login and registration functionality with JWT-based authentication.
- Handling session persistence with local storage for a better user experience.
- Using Axios to make secure HTTP requests from React to the backend.
- Integrating MongoDB for storing user data and securing passwords with hashing.
