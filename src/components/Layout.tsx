import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "background.default",
        gap: { xs: 1, md: 2 },
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: { xs: "none", sm: "flex" },
          minWidth: "50px",
          maxWidth: "250px",
          minHeight: "100vh",
        }}
      >
        <Sidebar />
      </Box>
      <Box
        sx={{
          width: "1px",
          minHeight: "calc(100vh - 10vh)",
          flexGrow: 1,
        }}
      >
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};
export default Layout;
