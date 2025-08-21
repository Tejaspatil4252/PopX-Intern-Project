import React from "react";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="h-screen w-full max-w-sm p-8 bg-gray-100 rounded-lg shadow-md flex flex-col">
        
    
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Create your <br /> <span className="text-purple-600">PopX</span> account
        </h2>

      
        <form className="space-y-4 flex-grow">
          {[
            { label: "Full Name", name: "fullName" ,placeholder:"Marry Doe" },
            { label: "Phone number", name: "phone",placeholder:"Marry Doe" },
            { label: "Email address", name: "email",placeholder:"Marry Doe" },
            { label: "Password", name: "password", type: "password",placeholder:"Marry Doe" },
            { label: "Company name", name: "company" ,placeholder:"Marry Doe" },
          ].map(({ label, name, type,placeholder = "text" }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-[#6A38F8]  mb-1">
                {label} <span className="text-red-500">*</span>
              </label>
              <input
                type={type}
                name={name}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder={placeholder}
                required={true}
                
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Are you an Agency? <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-6">
              {["Yes", "No"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="agency"
                    value={option.toLowerCase()}
                    className="accent-purple-600"
                  />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </form>

        
  <div className="w-full">
  <Link
    to="/home"
    type="submit"
    className="w-[100%] px-6 py-3 bg-[#6A38F8] text-center text-white font-semibold rounded-md hover:bg-purple-700 transition mx-auto block"
  >
    Create Account
  </Link>
</div>

      </div>
    </div>
  );
}

export default Registration