import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ItineraireList from "./pages/ItineraireList";
import ItineraireDetails from "./pages/itineraireDetails";
import { Route, Routes } from "react-router-dom";
import { lightGreen } from '@mui/material/colors';
import ItineraireMenuVertical from "./components/ItineraireMenuVertical";

const Green = lightGreen[300];

const lGreen = lightGreen[200];

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" sx={{bgcolor: lGreen, height: 30}}>
        <Toolbar>{/* Toolbar */}</Toolbar>
      </AppBar>
      <AppBar position="relative" sx={{bgcolor: Green, height: 100}}>
        <ItineraireMenuVertical/>
      </AppBar>
      <main>
        <Routes>
          <Route path="/" element={<ItineraireList />} />
          <Route path="/itineraire" element={<ItineraireDetails />} />
        </Routes>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          GEO-TRACE
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          By Remi Ponche, Phillipe Reich et Nacim Haiahem
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
