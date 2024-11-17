import HouseIcon from "@mui/icons-material/House";
import Box from "@mui/material/Box";
import { SidebarItem } from "./SidebarItem";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SchoolIcon from "@mui/icons-material/School";
import CampaignIcon from "@mui/icons-material/Campaign";
import InsightsIcon from "@mui/icons-material/Insights";
const Sidebar = () => {
  return (
    <Box
      component={"aside"}
      sx={{
        // position: "fixed",
        minHeight: "100vh",
        background: "linear-gradient(to bottom,#013b45, #4EC7B7)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: { xs: "block", sm: "none", md: "block" } }}>
        <img src="/logo.png" style={{ width: "150px" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <SidebarItem href="/dashboard" label="Dashboard">
          <HouseIcon />
        </SidebarItem>
        <SidebarItem href="/dashboard/schedule" label="Schedule">
          <CalendarMonthIcon />
        </SidebarItem>
        <SidebarItem href="/dashboard/courses" label="Course">
          <TextSnippetIcon />
        </SidebarItem>
        <SidebarItem href="/dashboard/gradebook" label="Gradebook">
          <SchoolIcon />
        </SidebarItem>
        <SidebarItem href="/dashboard/performance" label="Performance">
          <CampaignIcon />
        </SidebarItem>
        <SidebarItem href="/dashboard/announcement" label="Announcement">
          <InsightsIcon />
        </SidebarItem>
      </Box>
    </Box>
  );
};

export default Sidebar;
