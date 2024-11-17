import Grid from "@mui/material/Grid2";
import requireAuth from "../components/requireAuth";
import Tips from "../components/Tips";
import Announcements from "../components/Announcements";
import Quizzes from "../components/Quizzes";
import { client } from "../client";
import { useEffect } from "react";

const Dashboard = requireAuth(() => {
  useEffect(() => {
    console.log("loooooooooool");

    (async () => {
      const { data: newTodo } = await client.models.quiz.list();
      console.log("loooooooooool", newTodo);
    })();
  }, []);

  return (
    <Grid sx={{ height: "" }} container spacing={{ xs: 1, md: 2 }}>
      <Grid size={{ xs: 12 }}>
        <Tips />
      </Grid>
      <Grid
        sx={{
          overflow: "auto",
          order: { xs: 2, sm: 1 },
        }}
        size={{ xs: 12, sm: 9 }}
      >
        <Announcements />
      </Grid>
      <Grid sx={{ order: { xs: 1, sm: 2 } }} size={{ xs: 12, sm: 3 }}>
        <Quizzes />
      </Grid>
    </Grid>
  );
});

export default Dashboard;
