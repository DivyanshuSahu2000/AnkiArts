// import React from "react";

// const Signup = () => {
//   return (
//     <div className="p-10  justify-center items-center flex-col flex">
//       <h1 className="text-2xl md:text-4xl font-medium  relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-gray-300 after:mt-1">
//         Sign UP
//       </h1>
//       <div className="p-5 mx-auto justify-center items-center  flex">
//         <form className=" gap-3 justify-center items-center flex-col flex">
//           <input
//             className="border-gray-200 border-2 rounded-lg px-2 py-1 "
//             type="text"
//             placeholder="Enter Username"
//           />
//           <input
//             className="border-gray-200 border-2 rounded-lg  px-2 py-1"
//             type="text"
//             placeholder="Enter Email"
//           />
//           <input
//             className="border-gray-200 border-2  rounded-lg px-2 py-1"
//             type="text"
//             placeholder="Enter Password"
//           />
//           <button className="border-gray-50 px-3 py-1 text-lg font-medium text-white bg-gray-700 border-2 mt-2 rounded-xl hover:bg-gray-600">
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
////////////
// import React from "react";
// import { useNavigate } from "react-router";
// import { FaPencilAlt } from "react-icons/fa";

// const Signup = () => {
//   const navigate = useNavigate();

//   return (
//     <div
//       id="signUP"
//       className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-3"
//     >
//       {/* Modal Box */}
//       <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6  mx-auto justify-center items-center flex-col flex gap-1 sm:p-8 relative">
//         {/* Close Button */}
//         <button
//           onClick={() => navigate("/")} // go back home
//           className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
//         >
//           ✕
//         </button>

//         {/* Title */}
//         <h2
//           className="text-2xl sm:text-3xl  mb-4 text-center
//           md:text-3xl font-medium  relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-gray-300 after:mt-1
//          "
//         >
//           Sign Up
//         </h2>

//         {/* Form */}
//         <form className="flex flex-col gap-3">
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="border p-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-300 text-sm sm:text-base"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="border p-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-300 text-sm sm:text-base"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="border p-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-300 text-sm sm:text-base"
//           />

//           <button
//             type="submit"
//             className="bg-[#2e2856] hover:bg-[#4b3ea1] text-white py-2 rounded-md font-medium text-sm sm:text-base flex justify-center items-center gap-1.5"
//           >
//             Create Account
//             <FaPencilAlt size={15} />
//           </button>
//         </form>

//         {/* Footer */}
//         <p className="text-sm text-center mt-3">
//           Already have an account?{" "}
//           <span
//             onClick={() => navigate("/login")}
//             className="text-indigo-600 cursor-pointer hover:underline"
//           >
//             Login
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

////////////
// components/pages/Signup.jsx
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { FaPencilAlt } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

const Signup = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name: form.name, email: form.email };
    login(userData);

    navigate("/");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-3">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={() => navigate("/")}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl mb-4 text-center font-medium">Sign Up</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="border p-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="border p-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="border p-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />

          <button
            type="submit"
            className="bg-[#2e2856] hover:bg-[#4b3ea1] text-white py-2 rounded-md flex items-center justify-center gap-1.5"
          >
            Create Account
            <FaPencilAlt size={15} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
