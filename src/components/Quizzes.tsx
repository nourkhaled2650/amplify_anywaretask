import { Box, CircularProgress, Typography } from "@mui/material";
import { AllButton } from "./AllButton";
import { useGetQuizzesQuery } from "../state/serverState/quizApi";
import { QuizItem } from "./quizItem";
import { SecondaryFont } from "./SecondaryFont";

const Quizzes = () => {
  const { data: quizzes, isLoading, isSuccess, isError } = useGetQuizzesQuery();
  return (
    <Box
      component={"section"}
      sx={{
        bgcolor: "background.paper",
        position: "relative",
        padding: 2,
        borderRadius: "10px",
      }}
    >
      <Typography
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          fontSize: { xs: 20, md: 25 },
          paddingTop: 1,
        }}
      >
        What's due
      </Typography>
      <Typography sx={{ color: "text.secondary" }}>
        Are you ready to fight?
      </Typography>
      <Box
        sx={{
          padding: { md: 1 },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {isError && (
          <SecondaryFont label="Sorry! Couldn't fetch the Quizzes." />
        )}
        {isLoading && <CircularProgress color="secondary" />}
        {isSuccess &&
          quizzes?.map((quiz) => (
            <QuizItem
              key={quiz._id}
              title={quiz.title}
              course={quiz.course}
              Topic={quiz.Topic}
              dueDate={quiz.dueDate}
            />
          ))}
      </Box>
      <AllButton />
    </Box>
  );
};

export default Quizzes;
