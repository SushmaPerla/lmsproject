import React, { useState } from 'react';

const Login = () => {
  
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-center text-white">Login</h1>
        </div>
        <form  className="space-y-4">
          <div className="flex items-center">
            <label htmlFor="username" className="text-sm text-white mr-2">
              Username:
            </label>
            <input
              id="username"
              name="username"
              type="text"
              
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="password" className="text-sm text-white mr-2">
              Password:
            </label>
            <input
              id="password"
              name="password"
              type="password"
             
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            
            />
          </div>
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-white hover:underline focus:outline-none">
              Forgot password?
            </a>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
