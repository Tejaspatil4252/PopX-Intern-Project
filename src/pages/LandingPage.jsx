import React from 'react';
import { Link } from 'react-router-dom';



function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="h-screen w-full max-w-sm p-8 bg-gray-100 rounded-lg shadow-md flex flex-col justify-end">
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-left">
            Welcome to <span className="text-purple-600">PopX</span>
          </h2>
          <p className="text-sm text-gray-600 text-left">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
          </p>
        </div>

        <div className="flex flex-col space-y-2 text-center">
          <Link
            to="/register"
            className="w-full py-2 bg-[#6A38F8] text-white font-semibold rounded-md hover:bg-purple-700 transition"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="w-full py-2 bg-[#E5D9FF] text-purple-600 font-semibold rounded-md hover:bg-purple-200 transition"
          >
            Already Registered? Login
          </Link>
        </div>
        
      </div>
    </div>
  );
}
export default LandingPage;