import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import router from "./route/index.tsx";
import store from "./state/store.ts";
import "./index.css";
import "./utils/i18n.ts";
const theme = createTheme({
  palette: {
    primary: { main: "#013b45" },
    secondary: { main: "#4EC7B7" },
    background: { default: "#ebeced", paper: "#FFFFFF" },
    text: {
      primary: "#525252",
      secondary: "#9c9c9c",
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
