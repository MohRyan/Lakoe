import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux/index.ts";
import "leaflet/dist/leaflet.css";
// import store, { persistor } from "./redux/index.ts";
// import { PersistGate } from "redux-persist/integration/react";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#FFF",
    },
  },
  typography: {
    fontFamily: "Merriweather, serif",
    fontWeightRegular: 400,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
