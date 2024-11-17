import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const SidebarItem = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeLink = location.pathname === href;

  const handleClick = () => {
    navigate(href);
  };
  return (
    <Box
      onClick={handleClick}
      sx={{
        cursor: "pointer",
        width: "100%",
        color: `${activeLink ? "secondary.main" : "background.paper"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: { sm: "center", md: "start", xs: "start" },
        paddingY: { xs: 3, md: 2 },
        paddingX: 2,
        gap: 2,
        fontSize: 25,
        fontWeight: `${activeLink ? "bold" : "light"}`,
        bgcolor: `${activeLink ? "background.paper" : ""}`,
        "&:hover": {
          bgcolor: "background.default",
          color: "secondary.main",
        },
      }}
    >
      {children}
      <Typography
        variant="h6"
        sx={{
          display: { xs: "flex", md: "flex", sm: "none" },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};
