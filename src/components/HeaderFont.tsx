import { Typography } from "@mui/material";

export const HeaderFont = ({ label }: { label: string }) => {
  return (
    <Typography
      sx={{
        color: "text.primary",
        fontWeight: "bold",
        fontSize: { xs: 12, md: 16 },
      }}
    >
      {label}
    </Typography>
  );
};
