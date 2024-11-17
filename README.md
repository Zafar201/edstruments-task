

# Task Manager Application

**Live URL:** [https://edstruments-task.vercel.app/](https://edstruments-task.vercel.app/)

## Features

- User authentication (register, login, logout).
- Task management (add, edit, delete, and mark tasks as completed).
- Filter tasks (all, completed, incomplete).
- State management using Context API.

---

## How to Run the Project

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Libraries and Technologies Used

- **React** (with Vite for fast development)
- **React Icons** (for  icons)
- **Context API** (for centralized state management)
- **Tailwindcss** (for styling)

---


## Application Structure

- **components/Common**: Reusable components (e.g., buttons)
- **components/Tasks**: Task-related components (TaskForm, TaskList, TaskFilter)
- **context/AuthContext.js**: Handles user authentication
- **context/TaskContext.js**: Handles task management
- **pages/Login.js**: User login page
- **pages/Register.js**: User registration page
- **pages/TaskManager.js**: Task management page
- **utils/taskUtils.js**: Helper functions for task operations
- **App.js**: Main application component
