import { Button } from "@mui/material";

export const AllButton = () => {
  return (
    <Button
      variant="text"
      sx={{
        position: "absolute",
        top: 2,
        right: 2,
        color: "secondary.main",
        fontWeight: "bold",
      }}
    >
      All
    </Button>
  );
};
