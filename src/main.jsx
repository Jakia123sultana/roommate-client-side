import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";

import {createBrowserRouter, RouterProvider} from "react-router";
import MainLayout from "./layouts/HomeLayout.jsx";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Pages/Login.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Register from "./Components/Pages/Register.jsx";
import AddRoommate from "./Components/Pages/AddRoommate.jsx";
import CardDetails from "./Components/slider/CardDetails.jsx";
import BrowseListing from "./Components/Pages/BrowseListing.jsx";
import MyListing from "./Components/Pages/MyListing.jsx";
import UpdateRoommate from "./Components/Pages/UpdateRoommate.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,

    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch(
            "https://roommate-server-side.vercel.app/facts-room"
          );
          return await res.json();
        },
        Component: Home,
      },
      {
        path: "addroommate",
        element: <PrivateRoute><AddRoommate/></PrivateRoute>,
      },
      {
        path: "/card-details/:id",
        loader: async () => {
          const res = await fetch(
            "https://roommate-server-side.vercel.app/roommates"
          );
          return await res.json();
        },
         element: <PrivateRoute><CardDetails/></PrivateRoute>,
      },
      {
        path: "/browselisting",
        Component: BrowseListing,
      },
      {
        path: "/mylisting",
          element: <PrivateRoute><MyListing/></PrivateRoute>,
      },
      {
        path: "updateRoommate/:id",

        loader: async ({params}) => {
          const res = await fetch(
            `https://roommate-server-side.vercel.app/roommates/${params.id}`
          );

          return await res.json();
        },
         element: <PrivateRoute><UpdateRoommate/></PrivateRoute>,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      // {
      //   path: 'users',
      //   loader: () => fetch('https://coffee-store-server-mocha-eight.vercel.app/users'),
      //   Component: Users
      // }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
