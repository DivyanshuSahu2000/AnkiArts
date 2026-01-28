// import { FiLogIn } from "react-icons/fi";
// import React from "react";
// import { useNavigate } from "react-router";

// const Login = () => {
//   const navigate = useNavigate();

//   return (
//     <div
//       id="signUP"
//       className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-3"
//     >
//       <div
//         className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 mx-auto justify-center items-center flex-col flex gap-1 sm:p-8 relative
//       "
//       >
//         <button
//           onClick={() => navigate("/")}
//           className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
//         >
//           ✕
//         </button>
//         <h2
//           className="text-2xl sm:text-3xl  mb-4 text-center
//          md:text-3xl font-medium  relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-gray-300 after:mt-1
//         "
//         >
//           Login
//         </h2>
//         <form className="flex flex-col gap-3">
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
//             className="bg-[#2e2856] hover:bg-[#4b3ea1] text-white font-medium py-2 rounded-md text-sm sm:text-base flex justify-center items-center gap-1"
//           >
//             Login <FiLogIn size={17} />
//           </button>
//         </form>{" "}
//         <p className="text-sm text-center mt-3">
//           New user register here ?{" "}
//           <span
//             onClick={() => navigate("/signup")}
//             className="text-indigo-600 cursor-pointer hover:underline"
//           >
//             Sign Up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// components/pages/Login.jsx
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { FiLogIn } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name: form.email.split("@")[0], email: form.email };
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
        <h2 className="text-2xl mb-4 text-center font-medium">Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
            className="bg-[#2e2856] hover:bg-[#4b3ea1] text-white font-medium py-2 rounded-md flex items-center justify-center gap-1"
          >
            Login <FiLogIn size={17} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
