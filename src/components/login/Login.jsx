import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#022C22]">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>
        {/* Add the "Not registered?" prompt */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Not registered?{' '}
          <NavLink to="/register" className="text-green-600 hover:underline">
            Create an account
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
