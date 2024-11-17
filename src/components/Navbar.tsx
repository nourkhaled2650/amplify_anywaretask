import { Badge, Box, Drawer, Input, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { logout } from "../state/clientState/userSlice";
import { useAppDispatch } from "../hooks/reduxHooks";
export const Navbar = () => {
  const dispatch = useAppDispatch();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Box
      component={"nav"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "text.primary",
          fontSize: { xs: "20px", md: "30px" },
          fontWeight: "bold",
        }}
      >
        Welcome Nour,
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", gap: { xs: 1, sm: 2 } }}
      >
        <Input
          placeholder="Serach"
          sx={{ width: "25vw" }}
          startAdornment={<SearchIcon />}
        />
        <Badge sx={{ cursor: "pointer" }} badgeContent={3} color="secondary">
          <NotificationsIcon
            sx={{ fontSize: { xs: 25, sm: 30, md: 40 }, color: "primary.main" }}
          />
        </Badge>
        <Badge sx={{ cursor: "pointer" }} badgeContent={2} color="secondary">
          <MailIcon
            sx={{ fontSize: { xs: 25, sm: 30, md: 40 }, color: "primary.main" }}
          />
        </Badge>
        {/* drawer for small screens only */}
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <MenuIcon
            onClick={() => setOpenDrawer((prev) => !prev)}
            sx={{
              color: "primary.main",
              fontSize: { xs: 25, sm: 30, md: 40 },
              cursor: "pointer",
            }}
          />
          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <Sidebar />
          </Drawer>
        </Box>
        {/* TODO:add dropdown menu for the profile option */}
        <Box
          onClick={() => dispatch(logout())}
          sx={{
            width: { xs: "40px", md: "60px" },
            height: { xs: "40px", md: "60px" },
          }}
        >
          <img
            src="/profile.jpeg"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "100%",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
