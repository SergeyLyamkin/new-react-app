import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/index";
import ProjectsPage from "./pages/projects";
import TasksPage from "./pages/tasks";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<TasksPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
