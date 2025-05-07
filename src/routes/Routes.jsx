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
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import PrivateRoute from "./PrivetRoute";
import AdminRoute from "./AdminRoute";
import HostRoute from "./HostRoute";
import MyBookings from "../pages/Dashboard/Guest/MyBookings";
import ManageBookings from "../pages/Dashboard/Host/ManageBookings";

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
     element : <PrivateRoute><DashboardLayout/></PrivateRoute>,
     children : [
      {
        index : true,
        element : <PrivateRoute> <Statistics></Statistics></PrivateRoute>
      },
      {
        path : 'add-room',
        element : <PrivetRoute>
                 <HostRoute> <AddRoom/></HostRoute>
                 </PrivetRoute>
      },
      {
        path : 'my-listings',
        element : <PrivetRoute>
                  <HostRoute><MyListings/></HostRoute>
                  </PrivetRoute>
      },
      {
         path : 'manage-users',
         element : <PrivetRoute> 
                  <AdminRoute><ManageUsers/></AdminRoute>
                  </PrivetRoute>
      },
      {
         path : 'my-bookings',
         element : <PrivetRoute> 
                 <MyBookings/>
                  </PrivetRoute>
      },
      {
         path : 'manage-bookings',
         element : <PrivetRoute> 
                 <HostRoute> <ManageBookings/></HostRoute>
                  </PrivetRoute>
      },
      {
        path : 'profile',
        element : <PrivetRoute><Profile/></PrivetRoute>
      }
     ]
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
]);
