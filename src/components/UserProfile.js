import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import Footer from "./Footer";

const UserProfile = () => {
  return (
    <div>
      <Header />
      <SideNav />
      <div className="ml-[300px] h-[1000px] flex flex-col">
        <div className="text-[36px] ml-14 mt-4">User Profile</div>
        <div className=" bg-seaGreen w-[1800px] h-[800px] ml-[60px] mt-8">
          <div className="bg-white rounded-2xl h-[400px] w-[400px] mt-[55px] ml-[60px]">
            <div className="flex flex-col items-center">
              <img
                src="images/profile-user_64572.png"
                alt="user"
                className="w-[179px] h-[162px] mt-4 "
              />
              <div className="-ml-[140px] mt-5 text-[24px]">
                <h1>User Name</h1>
                <h1>Contact Number </h1>
                <h1>email</h1>
                <h1>Department</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
