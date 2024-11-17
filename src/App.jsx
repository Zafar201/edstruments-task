import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute";
import RegisterPage from "./pages/RegisterPage";
import ErrorBoundary from "./components/error/ErrorBoundary";
import LoginPage from './pages/LoginPage'

const TaskManager = lazy(() => import("./pages/TaskManagementPage"));
// const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage />} />

            <Route
              path="/tasks"
              element={
                <PrivateRoute>
                  <TaskManager />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
