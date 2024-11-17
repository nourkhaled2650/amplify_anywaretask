import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import Schedule from "../pages/Schedule";
import Courses from "../pages/Courses";
import Gradebook from "../pages/Gradebook";
import Performance from "../pages/Performance";
import Announcement from "../pages/Announcement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "gradebook",
        element: <Gradebook />,
      },
      {
        path: "performance",
        element: <Performance />,
      },
      {
        path: "announcement",
        element: <Announcement />,
      },
    ],
  },
]);

export default router;
