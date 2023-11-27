import React, { useState } from "react";
import { LoginStudent, isAuthenticated } from "../actions/authActions";
import TailwindLoader from "../components/common/TailwindLoader";
import DangerAlert from "../components/common/DangerAlert";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (isAuthenticated()) {
    return <Navigate to="/" />;
  }

  function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    LoginStudent(e.target.email.value, e.target.password.value)
      .catch((err) => {
        setError(err.response.message || err.response);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md bg-white p-8 rounded-md shadow-lg">
        <div className="text-3xl font-bold mb-4 text-[#1e0e4b] text-center">
          Welcome back to <span className="text-blue-500">NOCGenius</span>
        </div>
        <div className="text-sm text-[#1e0e4b] text-center mb-6">
          Log in to your account
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
              Registration Number
            </label>
            <input
              onChange={() => setError("")}
              type="text"
              id="email"
              required
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              onChange={() => setError("")}
              type="password"
              id="password"
              required
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="text-sm text-blue-500">
            <Link to="/forgot-password">Forgot your password?</Link>
          </div>

          <DangerAlert message={error} />

          <button
            type="submit"
            className="flex justify-center text-center bg-blue-500 w-full py-2 rounded-md text-white font-semibold transition duration-300 hover:bg-blue-600 focus:outline-none"
          >
            {isLoading ? <TailwindLoader /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
