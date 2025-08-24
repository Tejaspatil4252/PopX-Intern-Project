
import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [checkData, setCheckData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const verifiedE = props.email;
  const verifiedP = props.password;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verifiedE === checkData.email && verifiedP === checkData.password) {
      navigate("/home");
    } else {
      setError(true);
    }
  };
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="h-screen w-full max-w-sm p-8 bg-gray-100 rounded-lg shadow-md flex flex-col ">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Signin to your <br /> <span className="text-purple-600">PopX</span>{" "}
            account
          </h2>
          <p className="text-sm text-gray-600 text-left my-3">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {[
              { label: "Email address", name: "email", value: checkData.email },
              {
                label: "Password",
                name: "password",
                type: "password",
                value: checkData.password,
              },
            ].map(({ label, name, value, type = "text" }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-[#6A38F8] mb-1">
                  {label} <span className="text-red-500">*</span>
                </label>
                <input
                  type={type}
                  name={name}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder={label}
                  value={value}
                  onChange={handleChange}
                />
              </div>
            ))}

            {error ? <h1 className="text-red-500">Invalid input</h1> : null}

            <div className="w-full my-4">
              <button
                to="/home"
                type="submit"
                className="w-[100%] px-6 py-2 mt-5 bg-[#6A38F8] text-white font-semibold rounded-md hover:bg-purple-700 transition mx-auto block text-center"
              >
                Login
              </button>
            </div>
          </form>
         {error ?  <button
            onClick={handleRegister}
            className="w-full py-2 mt-2 bg-[#E5D9FF] text-purple-600 font-semibold rounded-md hover:bg-purple-200 transition button-center"
          >
            Don't have Account? Register
          </button> : null}
        </div>
      </div>
    </div>
  );
}

export default Login;
