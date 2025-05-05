import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import DashboardLayout from "../layout/DashboardLayout";
import Statistics from '../pages/Dashboard/Common/Statistics'
import AddRoom from "../pages/Dashboard/Host/AddRoom";
import MyListings from "../pages/Dashboard/Host/MyListings";
import Profile from "../pages/Dashboard/Common/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: <PrivetRoute> <RoomDetails /></PrivetRoute>,
      },
    ],
  },
  {
     path : "/dashboard",
     element : <DashboardLayout/>,
     children : [
      {
        index : true,
        element : <Statistics></Statistics>
      },
      {
        path : 'add-room',
        element : <AddRoom/>
      },
      {
        path : 'my-listings',
        element : <MyListings/>
      },
      {
        path : 'profile',
        element : <Profile/>
      }
     ]
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
]);
