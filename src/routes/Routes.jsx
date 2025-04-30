import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

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
        element: <RoomDetails />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
]);
