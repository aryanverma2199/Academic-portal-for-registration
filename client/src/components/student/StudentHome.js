import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getNotice } from "../../redux/actions/adminActions";
import //   getAttendance,
//   getSubject,
//   // getTestResult,
"../../redux/actions/studentActions";

import Body from "./Body";
import Header from "./Header";
import Sidebar from "./Sidebar";

const StudentHome = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getSubject(user.result.department, user.result.year));
    // dispatch(
    //   getTestResult(
    //     user.result.department,
    //     user.result.year,
    //     user.result.section
    //   )
    // );
    // dispatch(
    //   getAttendance(
    //     user.result.department,
    //     user.result.year,
    //     user.result.section
    //   )
    // );
    // dispatch(getNotice());
  }, [dispatch]);

  return (
    <div className="bg-[#000000] h-screen flex items-center justify-center">
      <div className="flex flex-col  bg-[#dbdaad] h-5/6 w-[95%] rounded-none shadow-2xl space-y-6 overflow-y-hidden">
        <Header />
        <div className="flex flex-[0.95]">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
