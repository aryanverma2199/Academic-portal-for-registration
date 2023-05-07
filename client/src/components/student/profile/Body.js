import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SecurityUpdateIcon from "@mui/icons-material/SecurityUpdate";
import { Avatar } from "@mui/material";
import Data from "./Data";
import { useNavigate } from "react-router-dom";
const Body = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex  items-center justify-between mr-8">
          <div className="flex space-x-2 text-gray-400">
            <AssignmentIndIcon />
            <h1>Profile</h1>
          </div>
          <div
            onClick={() => navigate("/student/update")}
            className="flex space-x-2 cursor-pointer"
          >
            <SecurityUpdateIcon />
            <h1 className="font-bold">Update</h1>
          </div>
        </div>
        <div className="w-[98%]  bg-white relative rounded-none  ">
          <div className="absolute left-[50%] top-[-10%] ">
            <Avatar src={user.result.avatar} sx={{ width: 70, height: 70 }} />
          </div>
          <div className="overflow-y-scroll  h-[27rem]">
            <div className="flex flex-col py-10 ml-10 space-x-36 ">
              <div className="flex flex-col space-y-6">
                <Data label="Name" value={user.result.name} />
                {/* new */}
                <Data label="Roll No" value={user.result.rollno} />
                <Data label="Username" value={user.result.username} />
                <Data label="Email" value={user.result.email} />
                <Data label="Department" value={user.result.department} />
                <Data
                  label="Contact Number"
                  value={user.result.contactNumber}
                />
                <Data label="DOB" value={user.result.dob} />
                <Data label="Year" value={user.result.year} />
                <Data label="Semester" value={user.result.semester} />
                <Data label="Batch" value={user.result.batch} />
                <Data label="Father's Name" value={user.result.fatherName} />
                <Data
                  label="Father's Contact Number"
                  value={user.result.fatherContactNumber}
                />
                <Data label="Mother's Name" value={user.result.motherName} />
                <Data label="Category" value={user.result.category} />
                <Data label="Address" value={user.result.address} />
                <Data
                  label="Original Allotment"
                  value={user.result.allotment}
                />
                {/* 6 */}
                <Data label="10 Result" value={user.result.xresult} />
                <Data label="12 Result" value={user.result.xiiresult} />
                <Data label="TC/Migration" value={user.result.tcmigration} />
                <Data
                  label="Caste Certificate"
                  value={user.result.castecertificate}
                />
                <Data
                  label="Income Certificate"
                  value={user.result.incomecertificate}
                />
                <Data
                  label="Domicile Certificate"
                  value={user.result.domicilecertificate}
                />
                {/* 6 */}

                {/* </div> */}
                {/* <div className="flex flex-col space-y-10 "> */}
                {/* </div> */}
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Body;
