import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export function Home(): JSX.Element {
  return (
    <Box>
      <Link to="/canvas">
        <Button>go forward</Button>
      </Link>
    </Box>
  );
}
