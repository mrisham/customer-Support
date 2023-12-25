import React from "react";
import Cards from "./Cards";

const Content = () => {
  return (
    <div className="ml-[300px] h-[1000px] flex flex-col">
      <div className="text-[36px] mt-8 text-center">Dashboard</div>
      <div className="mt-8 m-auto">
        <Cards />
      </div>
    </div>
  );
};

export default Content;
