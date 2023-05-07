import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";

import EngineeringIcon from "@mui/icons-material/Engineering";
import BoyIcon from "@mui/icons-material/Boy";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";

import ReplyIcon from "@mui/icons-material/Reply";
const Body = () => {
  const [open, setOpen] = useState(false);

  const [value, onChange] = useState(new Date());
  const students = useSelector((state) => state.admin.allStudent);
  const faculties = useSelector((state) => state.admin.allFaculty);
  const admins = useSelector((state) => state.admin.allAdmin);
  const departments = useSelector((state) => state.admin.allDepartment);

  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex text-gray-400 items-center space-x-2">
          <HomeIcon />
          <h1>Dashboard</h1>
        </div>
        <div className="flex flex-col mr-5 space-y-4 overflow-y-hidden">
          <div className="bg-white h-[20rem] rounded-none shadow-none grid grid-rows-4 justify-between px-8 items-center space-x-4">
            <div className="flex items-center space-x-4 ">
              <EngineeringIcon
                className="rounded-full py-2 bg-red-200"
                sx={{ fontSize: 35 }}
              />
              <div className="flex flex-col">
                <h1>Faculty</h1>
                <h2 className="text-2xl font-bold">{faculties?.length}</h2>
              </div>
            </div>
            <div className="flex items-center space-x-4 ">
              <BoyIcon
                className="rounded-full py-2 bg-red-200"
                sx={{ fontSize: 35 }}
              />
              <div className="flex flex-col">
                <h1>Student</h1>
                <h2 className="text-2xl font-bold">{students?.length}</h2>
              </div>
            </div>
            <div className="flex items-center space-x-4 ">
              <SupervisorAccountIcon
                className="rounded-full py-2 bg-red-200"
                sx={{ fontSize: 35 }}
              />
              <div className="flex flex-col">
                <h1>Admin</h1>
                <h2 className="text-2xl font-bold">{admins?.length}</h2>
              </div>
            </div>
            <div className="flex items-center space-x-4 ">
              <MenuBookIcon
                className="rounded-full py-2 bg-red-200"
                sx={{ fontSize: 35 }}
              />
              <div className="flex flex-col">
                <h1>Department</h1>
                <h2 className="text-2xl font-bold">{departments?.length}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
