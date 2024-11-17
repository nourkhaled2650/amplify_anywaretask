import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { toggleShowAll } from "../state/clientState/tipsSlice";

const Tips = () => {
  const { showAll, tips } = useAppSelector((state) => state.tips);
  const activeTip = tips[Math.floor(Math.random() * tips.length)];
  const dispatch = useAppDispatch();
  return (
    <Box
      component={"section"}
      sx={{
        bgcolor: "background.paper",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        width: "100%",
        paddingLeft: 2,
      }}
    >
      <Box
        sx={{
          order: { xs: 2, sm: 1 },
          display: "flex",
          flexDirection: "column",
          marginY: 3,
          gap: 1,
          alignItems: "start",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            backgroundImage: "linear-gradient(to right,#013b45, #4EC7B7)",
            fontWeight: "bold",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "cursive",
          }}
        >
          Exams Time
        </Typography>
        <Typography sx={{ color: "text.primary" }}>
          Here we are, Are you ready for fight? Don't worry, we prepared some
          tips to be ready for your exams.
        </Typography>
        {!showAll && (
          <Typography
            sx={{ color: "text.secondary", fontFamily: "revert-layer" }}
          >
            {activeTip.text} {activeTip.author}
          </Typography>
        )}
        {showAll &&
          tips.map((tip) => (
            <Typography
              key={tip.id}
              sx={{ color: "text.secondary", fontFamily: "revert-layer" }}
            >
              {tip.text} {tip.author}
            </Typography>
          ))}
        <Button
          onClick={() => dispatch(toggleShowAll())}
          variant="contained"
          color="secondary"
          sx={{
            color: "background.paper",
            fontWeight: "bold",
            paddingX: 4,
          }}
        >
          View exams tips
        </Button>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "30%" },
          height: "100%",
          minHeight: "200px",
          order: { xs: 1, sm: 2 },
        }}
      >
        <img
          src="/tips.jpg"
          style={{ width: "100%", height: "100%", minHeight: "150px" }}
          alt="Tip"
        />
      </Box>
    </Box>
  );
};

export default Tips;
