import { Box } from "@mui/material";
import React from "react";
import { ProjectCanvas } from "./ProjectCanvas";

export function ProjectView(): JSX.Element {
  return (
    <Box width="100%" height="100%">
      <Box width="100%" height="6%" sx={{ border: "2px solid #000" }}>
        header
      </Box>
      <ProjectCanvas></ProjectCanvas>
    </Box>
  );
}
