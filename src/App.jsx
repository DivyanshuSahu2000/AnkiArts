import Header from "./components/Header";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="bg-gray-200 min-h-[100vh] ">
        <div className="fixed w-full  top-0 left-0 z-50">
          <Header></Header>
        </div>
        <main className="md:pt-[115px] pt-[105px] sm:pt-[107px]">
          {" "}
          <Outlet />
          <ToastContainer />
        </main>
      </div>
    </>
  );
}

export default App;
