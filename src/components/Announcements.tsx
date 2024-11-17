import { Box, CircularProgress, Typography } from "@mui/material";
import { useGetAnnouncementsQuery } from "../state/serverState/announcementApi";
import { AllButton } from "./AllButton";
import { AnnouncementItem } from "./AnnouncementItem";
import { SecondaryFont } from "./SecondaryFont";

const Announcements = () => {
  const {
    data: announcements,
    isLoading,
    isSuccess,
    isError,
  } = useGetAnnouncementsQuery();
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
        Announcements
      </Typography>
      <Typography sx={{ color: "text.secondary" }}>
        Recent Updates, You are missing something.
      </Typography>
      <Box sx={{ padding: { md: 1 } }}>
        {isError && (
          <SecondaryFont label="Sorry! Couldn't fetch the Announcements, make sure server is runner" />
        )}
        {isLoading && <CircularProgress color="secondary" />}
        {isSuccess &&
          announcements.map((annouc) => (
            <AnnouncementItem
              key={annouc._id}
              author={annouc.author}
              role={annouc.role}
              message={annouc.message}
            />
          ))}
      </Box>
      <AllButton />
    </Box>
  );
};

export default Announcements;
