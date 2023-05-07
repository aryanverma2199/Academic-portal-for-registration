import React from "react";
import Header from "../../../../student/Header";
import Body from "./Body";

const FirstTimePassword = () => {
  return (
    <div className="bg-[#000000] h-screen flex items-center justify-center">
      <div className="flex flex-col  bg-[#dbdaad] h-5/6 w-[95%] rounded-none shadow-2xl space-y-6 ">
        <Header />
        <div className="flex flex-[0.95] w-full">
          <Body />
        </div>
      </div>
    </div>
  );
};

export default FirstTimePassword;
