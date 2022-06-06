import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  let isLogged = false;
  let data = { reason: "User not logged in" };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            isLogged ? <Dashboard /> : <Navigate to="/login" state={data} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<h2>Error Page Not Found</h2>} />
      </Routes>
      {/* Footer */}
      <footer>This is footer</footer>
    </BrowserRouter>
  );
}

export default App;
