import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CustomNode = ({
  isConnectable,
  targetPosition = Position.Top,
  sourcePosition = Position.Bottom,
}: NodeProps): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
    <Box
      sx={{
        borderColor: "black",
        p: "1px",
        border: 1,
        borderRadius: 1,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        sx={{ backgroundColor: "white" }}
      >
        <Box display="flex" flexDirection="row" alignContent="space-between">
          <Button
            variant="contained"
            sx={{ p: 0, maxWidth: "30px", marginRight: 2, fontSize: 5 }}
          >
            resize
          </Button>
          <Button
            variant="contained"
            sx={{ p: 0, fontSize: 5 }}
            onClick={handleOpen}
          >
            comment
          </Button>
        </Box>
        <Box>
          <Typography sx={{ my: 5 }}>Content of page</Typography>
        </Box>
        <Box display="flex" flexDirection="row" alignContent="space-between">
          <Button
            variant="contained"
            sx={{ p: 0, marginRight: 2, fontSize: 5 }}
          >
            minimize
          </Button>
          <Button variant="contained" sx={{ p: 0, fontSize: 5 }}>
            resize
          </Button>
        </Box>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Comments thing
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Placeholder for connection comments
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

CustomNode.displayName = "CustomNode";

export default memo(CustomNode);
