import React from "react";
import { Link } from "react-router-dom";
// import background from "./college.png";
const Login = () => {
  return (
    <div
      className="h-screen w-screen backdrop-blur-md flex  justify-center bg-fixed "
      style={{
        backgroundImage: "url(/college.png)",
        height: "100vh",
        // backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center mt-10 space-y-0">
        {/* <h1 className="text-3xl font-semibold bg-black text-white w-full text-center py-4 bg-opacity-75 rounded-none">
          <p>
            <img
              src="http://recsonbhadra.ac.in/static/media/Collegelogo.96cbe2da1f0150aefe6d.png"
              width="50"
              height="50"
            />
            Rajkiya Engineering College Sonbhadra
          </p>
        </h1> */}

        <>
          {/* Hello world */}
          <div
            className="masterConatiner flex flex-row"
            style={{
              masterConatiner: { minWidth: "360px", maxHeight: "100vh" },
            }}
          >
            <nav className="navbar navbar-dark bg-dark">
              <div className="container-fluid d-flex justify-content-between">
                <div
                  className="logo_plus_name_flex"
                  style={{
                    logo_plus_name_flex: {
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginLeft: "2%",
                      boxSizing: "border-box",
                    },
                  }}
                >
                  <img
                    src="http://recsonbhadra.ac.in/static/media/Collegelogo.96cbe2da1f0150aefe6d.png"
                    style={{ width: "8rem", margin: "1rem", size: "auto" }}
                    alt="sry"
                  />
                  <div
                    className="college_name"
                    style={{ marginLeft: "1%" }}
                    width={500}
                    height="auto"
                  >
                    <span style={{ display: "block" }}>
                      राजकीय इंजीनियरिंग कॉलेज सोनभद्र
                    </span>
                    <span> Rajkiya Engineering College Sonbhadra</span>
                    <div className="Aicte">
                      An AICTE approved Government Engineering College
                      affiliated to AKTU Lucknow (College Code 841)
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </>

        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-xl bg-[#d65158] bg-opacity-30 rounded-full">
            <h1 className="text-4xl font-bold">Student</h1>
            <Link
              type="button"
              to="/login/studentlogin"
              className="flex items-center justify-center bg-black h-10 w-32 text-lg rounded text-white hover:scale-110 transition-all duration-200"
            >
              Login
            </Link>
          </div>
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-xl bg-[#5a51d6] bg-opacity-30 rounded-full">
            <h1 className="text-4xl font-bold">Faculty</h1>

            <Link
              type="button"
              to="/login/facultylogin"
              className="flex items-center justify-center bg-black h-10 w-32 text-lg rounded text-white hover:scale-110 transition-all duration-200"
            >
              Login
            </Link>
          </div>
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-xl bg-[#5a51d6] bg-opacity-30 rounded-full">
            <h1 className="text-4xl font-bold">Admin</h1>

            <Link
              type="button"
              to="/login/adminlogin"
              className="flex items-center justify-center bg-black h-10 w-32 text-lg rounded text-white hover:scale-110 transition-all duration-200"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
