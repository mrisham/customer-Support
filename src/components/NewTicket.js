import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";

function NewTicket() {
  return (
    <div>
      <Header />
      <SideNav />
      <div className="ml-[300px] h-[1000px] flex flex-col items-center">
        <div className="text-[36px] mt-8 text-center">Create New Ticket</div>
        <form className="mt-8 w-[300px]">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <label htmlFor="ticketNumber">Ticket Number</label>
            <input
              type="text"
              id="ticketNumber"
              name="ticketNumber"
              className="w-full p-2 border border-gray-300 rounded bg-box"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full p-2 border border-gray-300 rounded bg-box"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded bg-box"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <label htmlFor="department">Department</label>
            <input
              type="text"
              id="department"
              name="department"
              className="w-full p-2 border border-gray-300 rounded bg-box"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            Create Ticket
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default NewTicket;
