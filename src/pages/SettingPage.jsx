import React from "react";
import { Link } from "react-router-dom";

function SettingPage(props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="h-screen w-full max-w-sm bg-white rounded-lg shadow-md flex flex-col">

      
        <div className="w-full bg-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 p-5">
            Account Settings
          </h2>
          
        </div>

       
        <div className="p-8 flex flex-col flex-grow">

        
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gray-300 p-1 rounded-full">
              <img
                src="/logo192.png"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-md font-semibold text-gray-900">{props.name}</h3>
              <p className="text-sm text-gray-600">{props.email}</p>
            </div>
          </div>

         
          <p className="text-sm text-gray-600 mb-4">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>

          
          <div className="-mx-8">
            <hr className="border-t border-gray-300" />
          </div>

         
          <div className="flex-grow mt-4"></div>
        </div>
      </div>
    </div>
  );
}




 export default SettingPage;