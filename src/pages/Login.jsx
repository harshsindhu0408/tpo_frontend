import React, { useState } from "react";
import { LoginStudent, isAuthenticated } from "../actions/authActions";
import TailwindLoader from "../components/common/TailwindLoader";
import DangerAlert from "../components/common/DangerAlert";
import { Navigate } from "react-router-dom";

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
        setError(err.response.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      <div className="max-w-md relative flex flex-col items-center p-12 rounded-md text-black bg-white ">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome back to <span className="text-[#7747ff]">App</span>
        </div>
        <div className="font-normal mb-4 text-center text-[#1e0e4b]">
          Log in to your account
        </div>
        <form className="flex flex-col gap-3 m-4" onSubmit={handleLogin}>
          <div className="block relative">
            <label
              htmlFor="email"
              className="block text-gray-600 cursor-text leading-[140%] font-normal mb-2"
            >
              Email
            </label>
            <input
              onChange={() => setError("")}
              type="text"
              id="email"
              required
              className="rounded border border-gray-200 w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-text leading-[140%] font-normal mb-2"
            >
              Password
            </label>
            <input
              onChange={() => setError("")}
              type="password"
              id="password"
              required
              className="rounded border border-gray-200 w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div>
            <a className="text-[#7747ff]" href="#">
              Forgot your password?
            </a>
          </div>

          <DangerAlert message={error} />

          <button
            type="submit"
            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white font-normal"
          >
            {isLoading ? <TailwindLoader /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
