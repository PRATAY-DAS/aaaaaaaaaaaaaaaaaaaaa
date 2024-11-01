import { Box } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";
import Stocks from "@/scenes/stocks";
import Crypto from "@/scenes/crypto";
import Forex from "@/scenes/forex";
import Global from "@/scenes/global";
import GetFunded from "@/scenes/getFunded";
import More from "@/scenes/more";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />} />
              <Route path="/stocks" element={<Stocks />} />
              <Route path="/crypto" element={<Crypto />} />
              <Route path="/forex" element={<Forex />} />
              <Route path="/global" element={<Global />} />
              <Route path="/get-funded" element={<GetFunded />} />
              <Route path="/more" element={<More />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
