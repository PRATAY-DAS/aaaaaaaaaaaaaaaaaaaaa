import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import logo from "@/assets/logo.png"; // Assuming @ is set to src directory

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.60rem" alignItems="center">
        <img src={logo} alt="NextBull Logo" style={{ width: "33px", height: "30px" }} />
        <Typography variant="h4" fontSize="20px">
          NextBull 
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: palette.grey[300],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: palette.grey[300],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/Stocks"
            onClick={() => setSelected("Stocks")}
            style={{
              color: palette.grey[300],
              textDecoration: "inherit",
            }}
          >
            Stocks
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/Crypto"
            onClick={() => setSelected("Crypto")}
            style={{
              color: palette.grey[300],
              textDecoration: "inherit",
            }}
          >
            Crypto
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/Forex"
            onClick={() => setSelected("Forex")}
            style={{
              color: palette.grey[300],
              textDecoration: "inherit",
            }}
          >
            Forex
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/Global"
            onClick={() => setSelected("Global")}
            style={{
              color: palette.grey[300],
              textDecoration: "inherit",
            }}
          >
            Global
          </Link>
          
        </Box>

        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/GetFunded"
            onClick={() => setSelected("GetFunded")}
            style={{
              color: palette.grey[300],
              textDecoration: "inherit",
            }}
          >
            GetFunded
          </Link>
        </Box>

        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/More"
            onClick={() => setSelected("More")}
            style={{
              color: palette.grey[300],
              textDecoration: "inherit",
            }}
          >
            More
          </Link>
        </Box>
        
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
