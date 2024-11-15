import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { ThemeProvider, useTheme } from "@mui/material";

import Home from "./pages/Home";
import AdminDashboard from "./admin/pages/AdminDashboard";

import "./App.scss";

function App() {
  // const theme = useTheme();

  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Admin Route */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
