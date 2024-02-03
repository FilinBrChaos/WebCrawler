import { Box, Button } from "@mui/material";
import React from "react";
import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

const CustomNode = ({
  data,
  isConnectable,
  targetPosition = Position.Top,
  sourcePosition = Position.Bottom
}: NodeProps) => {
  return (
    <Box sx={{ borderColor: "black", borderWidth: 2, borderRadius: 2, backgroundColor: 'yellow' }}>
      <Box display="flex" flexDirection="column">
        {data?.label}
        <Button sx={{}} onClick={() => { console.log('hello') }}>slkdf</Button>
      </Box>
      <Handle
        type="target"
        position={targetPosition}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={sourcePosition}
        isConnectable={isConnectable}
      />
    </Box>
  );
};

CustomNode.displayName = "CustomNode";

export default memo(CustomNode);
