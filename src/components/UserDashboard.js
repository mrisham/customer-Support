import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";
import Content from "./Content";

const UserDashboard = () => {
  return (
    <div>
      <Header />
      <SideNav />
      <Content />
      <Footer />
    </div>
  );
};

export default UserDashboard;
