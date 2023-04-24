import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ApolloProvider } from "@apollo/client/react";

import apolloClient from "src/lib/apolloClient";

import GlobalStyles from "src/globalStyles";
import HomePage from "src/pages/index";
import ProjectsPage from "src/pages/projects";
import TasksPage from "src/pages/tasks";

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles /> {/* Apply Global Styles */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<TasksPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
