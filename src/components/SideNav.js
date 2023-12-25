import React from "react";

const SideNav = () => {
  return (
    <div>
      <div className="w-[300px] h-[1003px] bg-navGrey  fixed text-[26px] list-none">
        <div className=" mt-10 flex flex-row gap-2 items-center">
          <img
            src="images/expand.png"
            alt="icon"
            className="ml-4 w-[20px] h-[30px]"
          />
          <img
            src="images/Layout.png"
            alt="icon"
            className="w-[30px] h-[30px]"
          />
          <li className="ml-2">Dashboard</li>
        </div>
        <div className="flex flex-row ml-12 mb-2 mt-2">
          <img src="images/ticket.png" alt="" />
          <li className="ml-3">New Ticket</li>
        </div>
        <div className="flex flex-row ml-12">
          <img src="images/myTicket.png" alt="" />
          <li className="ml-3">My Ticket</li>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
