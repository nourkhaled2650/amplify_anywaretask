import { Typography } from "@mui/material";

export const SecondaryFont = ({ label }: { label: string }) => {
  return (
    <Typography
      sx={{
        color: "text.secondary",
        fontWeight: "light",
        fontSize: { xs: 12, md: 16 },
      }}
    >
      {label}
    </Typography>
  );
};
