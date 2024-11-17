import { Box } from "@mui/material";
import { HeaderFont } from "./HeaderFont";
import { SecondaryFont } from "./SecondaryFont";

interface ItemProps {
  author: string;
  role: string;
  message: string;
}
export const AnnouncementItem = ({ author, role, message }: ItemProps) => {
  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center", paddingY: 1 }}>
      <Box
        sx={{
          whiteSpaceidth: { xs: "30px", md: "40px" },
          height: { xs: "30px", md: "40px" },
          minWidth: { xs: "30px", md: "40px" },
          minHeight: { xs: "30px", md: "40px" },
        }}
      >
        <img
          src="/profile.jpeg"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "100%",
          }}
        />
      </Box>
      <Box>
        <HeaderFont label={author} />
        <SecondaryFont label={role} />
      </Box>
      <SecondaryFont label={message} />
    </Box>
  );
};
