# Day 7: Stopwatch/Timer App

## Description
The Stopwatch App is a simple and interactive tool to track elapsed time with millisecond precision. This project demonstrates React's state management, interval-based updates, and dynamic rendering. Users can start, stop, and reset the timer with intuitive controls.

---

## Features
- **Start Button**: Begin tracking time with precision.
- **Stop Button**: Pause the timer and retain the elapsed time.
- **Reset Button**: Reset the timer to zero and stop it.
- **Dynamic Timer Display**: Real-time updates showing elapsed time in `MM:SS:MS` format.

---

## Concepts Learned
- Managing component state with `useState`.
- Using `useEffect` for interval-based operations.
- Using `useRef` for persistent values between renders.
- Formatting and manipulating time in JavaScript.

---

## Technologies Used
- React (Vite)
- JavaScript (ES6+)
- CSS (Styling for UI components)
- Bootstrap (for responsive button styling)

---

## Challenges Faced
- Ensuring the timer updates seamlessly without lag.
- Handling the cleanup of intervals when the timer is stopped or the component unmounts.
- Formatting elapsed time into a user-friendly format.

---

## Solutions
- Used `clearInterval` in the `useEffect` cleanup function to avoid memory leaks.
- Leveraged `useRef` to store the interval ID and start time across renders.
- Applied modular JavaScript functions for precise time formatting.

---

## What's Next?
Tomorrow’s project: **User Pofile Card**

---

*Stay tuned for more updates!*


