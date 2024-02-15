import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { HomeHeader } from "../../components/HomeHeader";

export function Home(): JSX.Element {
  return (
    <Box width="100%" height="100%">
      <HomeHeader />
      <Box
        height="95%"
        sx={{
          backgroundColor: "#B4BDFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/canvas">
          <Button>go forward</Button>
        </Link>
      </Box>
    </Box>
  );
}
