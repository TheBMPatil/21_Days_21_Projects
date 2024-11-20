
# Day 2: To-Do List  
This project is part of the **21 Days, 21 React Projects** challenge. The goal is to build a simple and functional To-Do List application in React that allows users to manage their tasks effectively.  

## Features  
- Add new tasks.  
- Mark tasks as completed.  
- Unmark tasks as incomplete.  
- Delete tasks.  
- Display a message if no tasks are present.  

## Concepts Learned  
- State management using `useState`.  
- Array manipulation in React.  
- Conditional rendering for UI updates.  
- Handling form inputs.  
- Basic styling and component-based design.  

## Tech Stack  
- **Frontend**: React (with Vite for setup)  
- **Styling**: Basic CSS  

## How to Run the Project  

1. **Clone the Repository**:  
   ```bash  
   git clone https://github.com/TheBMPatil/21_Days_21_Projects/tree/master/Day02/to-do-list
   cd to-do-list  
   ```  

2. **Install Dependencies**:  
   ```bash  
   npm install  
   ```  

3. **Run the Development Server**:  
   ```bash  
   npm run dev  
   ```  
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.  

## Folder Structure  

```
src/  
├── components/  
│   ├── TodoInput.jsx    # Component for adding new tasks  
│   ├── TodoList.jsx     # Component for displaying all tasks  
│   ├── TodoItem.jsx     # Component for individual task with actions  
├── App.jsx              # Main component with app logic  
├── main.jsx             # Entry point for the app  
└── index.css            # Basic styling  
```

## Components Overview  

### 1. **TodoInput**  
Handles input from the user to add new tasks.  

### 2. **TodoList**  
Displays a list of all tasks.  

### 3. **TodoItem**  
Renders individual task items with options to mark as completed or delete.  

## Enhancements  
- Tasks can be marked as completed, which adds a line-through style.  
- Tasks are automatically removed if the delete button is clicked.  
- Dynamic message if there are no tasks.  



## What's Next?  
Stay tuned for **Day 3: Weather App**, where we’ll explore API integration and dynamic data fetching using `useEffect`.  
