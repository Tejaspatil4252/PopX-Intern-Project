import React from "react"
import { Link } from "react-router-dom";


function Login(){
    return(
       <div>
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="h-screen w-full max-w-sm p-8 bg-gray-100 rounded-lg shadow-md flex flex-col ">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">
          Signin to your <br /> <span className="text-purple-600">PopX</span> account
        </h2>
         <p className="text-sm text-gray-600 text-left my-3">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
          </p>

        <form className="space-y-4">
          {[
           
            { label: "Email address", name: "email" },
            { label: "Password", name: "password", type: "password" },
            
          ].map(({ label, name, type = "text" }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-[#6A38F8] mb-1">
                {label} <span className="text-red-500">*</span>
              </label>
              <input
                type={type}
                name={name}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder={label}
              />
            </div>
          ))}


 <div className="w-full my-4">
  <Link
    to="/home"
    type="submit"
    className="w-[100%] px-6 py-2 mt-5 bg-[#6A38F8] text-white font-semibold rounded-md hover:bg-purple-700 transition mx-auto block text-center"
  >
    Login
  </Link>
</div>

        </form>
      </div>
    </div>

        </div>
    )
}

export default Login;