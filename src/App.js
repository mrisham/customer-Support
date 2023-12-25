import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrimaryContainer from "./components/PrimaryContainer";
import UserDashboard from "./components/UserDashboard";
import NewTicket from "./components/NewTicket";
import UserProfile from "./components/UserProfile";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <PrimaryContainer />,
    },
    {
      path: "/dashboard",
      element: <UserDashboard />,
    },
    {
      path: "/newTicket",
      element: <NewTicket />,
    },
    {
      path: "/profile",
      element: <UserProfile />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
