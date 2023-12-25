import React from "react";

const Cards = () => {
  return (
    <div className="flex flex-row gap-6">
      <div className="w-[300px] h-[300px] rounded-xl  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-cardBlue flex flex-col justify-center items-center">
        <p className="text-[24px] mb-2">Total Tickets</p>
        <p className="text-[96px] font-medium text-blueNum mt-[4.25rem]">12</p>
      </div>
      <div className="w-[300px] h-[300px] rounded-xl  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-cardGreen flex flex-col justify-center items-center">
        {" "}
        <p className="text-[24px] mb-2">Total Solved</p>
        <p className="text-[96px] font-medium text-blueNum mt-[4.25rem]">8</p>
      </div>
      <div className="w-[300px] h-[300px] rounded-xl  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-cardOrange flex flex-col justify-center items-center">
        {" "}
        <p className="text-[24px] mb-2">Total Awaiting Approval</p>
        <p className="text-[96px] font-medium text-blueNum mt-[4.25rem]">2</p>
      </div>
      <div className="w-[300px] h-[300px] rounded-xl  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-cardYellow flex flex-col justify-center items-center">
        {" "}
        <p className="text-[24px] mb-2">Total In Progress</p>
        <p className="text-[96px] font-medium text-blueNum mt-[4.25rem]">22</p>
      </div>
    </div>
  );
};

export default Cards;
