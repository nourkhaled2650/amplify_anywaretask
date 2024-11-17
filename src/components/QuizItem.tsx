import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import { Box, Button } from "@mui/material";
import { HeaderFont } from "./HeaderFont";
import { SecondaryFont } from "./SecondaryFont";
export const QuizItem = ({
  title,
  course,
  Topic,
  dueDate,
}: {
  title: string;
  course: string;
  Topic: string;
  dueDate: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <HourglassTopIcon color="secondary" />
        <HeaderFont label={title} />
      </Box>
      <SecondaryFont label={`Course: ${course}`} />
      <SecondaryFont label={`Topic: ${Topic}`} />
      <SecondaryFont label={`Due to: ${dueDate}`} />
      <Button
        variant="outlined"
        sx={{
          fontWeight: "bold",
          color: "secondary.main",
          borderColor: "secondary.main",
          fontSize: { sm: 10, md: 14 },
          "&:hover": {
            borderColor: "primary.main",
          },
        }}
      >
        Start Quiz
      </Button>
    </Box>
  );
};
