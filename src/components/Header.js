import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-seaGreen h-[90px] w-full">
        <div className="flex flex-row justify-between">
          <div className="text-[48px] italic font-medium text-white h-[50px]">
            Helpdesk
          </div>
          <div className="list-none flex flex-row items-center">
            <li className="p-2 m-2">
              <img
                className="w-[60px] h-[28px]"
                src="images/slider.png"
                alt="slider"
              />
            </li>
            <li className="p-4 m-4">
              <img
                className="w-[24px] h-[28px]"
                src="images/notification.png"
                alt="notification"
              />
            </li>
            <li className="p-2 m-2">
              <img
                className="w-[24px] h-[28px]"
                src="images/user.png"
                alt="user"
              />
            </li>
            <li className="p-2 m-2">
              <img
                className="w-[24px] h-[28px]"
                src="images/logout.png"
                alt="logout"
              />
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
