import "./App.css";
import Login from "./pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import CreateNoc from "./pages/CreateNoc";
import DownloadNoc from "./pages/DownloadNoc";
import Home from "./pages/Home";
import UpdatePassword from "./pages/UpdatePassword";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<UpdatePassword />} />
        <Route path="/create-noc" element={<CreateNoc />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/download-noc" element={<DownloadNoc />} />
      </Routes>
    </div>
  );
}

export default App;
