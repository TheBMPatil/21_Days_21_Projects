import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); // Mock loading state
  const [theme, setTheme] = useState("light"); // Default theme

  // Mock checkAuth function to simulate auth check
  useEffect(() => {
    setTimeout(() => {
      setIsCheckingAuth(false);
    }, 1000); // Simulated delay
  }, []);

  if (isCheckingAuth)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <div data-theme={theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
