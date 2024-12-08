
# Full-Stack Chat App

A real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js) with WebSocket integration for live communication. This project allows users to send and receive messages in real-time, providing a smooth chat experience.

## Features
- **Real-Time Messaging:**
  - Users can send and receive messages in real-time using WebSockets (Socket.io).
- **User Authentication:**
  - Users can sign up, log in, and log out. Authentication is handled using JWT (JSON Web Token).
- **Profile Management:**
  - Users can update their profile picture and details.
- **Message History:**
  - Chat messages are stored in MongoDB and retrieved when users open the chat.
- **Private Messaging:**
  - Allows users to send messages to each other, and messages are only visible to the sender and receiver.
- **Socket.io Integration:**
  - Real-time updates are pushed using Socket.io to notify users about new messages.

## Tech Stack
- **React:** For building the component-based user interface.
- **React Router:** For navigation between pages (Login, Chat, Profile).
- **Node.js & Express:** For backend API and server management.
- **MongoDB:** For storing user data and chat messages.
- **Axios:** For making HTTP requests to the backend.
- **Socket.io:** For real-time communication and message updates.

## Backend Setup

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/full-stack-chat-app.git
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
   The server will be running on `http://localhost:5000`.

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
- Building a real-time chat application with WebSockets (Socket.io) for live communication.
- Implementing JWT authentication for user login and session management.
- Using MongoDB to store user profiles and message history.
- Managing state and props in React for handling dynamic content.
- Integrating Socket.io with React for real-time updates and notifications.
- Developing a backend API with Express to manage users and chat data.
