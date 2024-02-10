import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const Flex = ({ direction, justify, align }) => {
  const paperStyles = {
    m: 1,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    minHeight: "100%",
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        minHeight: "50vh",
        display: "flex",
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        overflow: "hidden",
        background: "cyan",
      }}>
      <Box sx={{ ...paperStyles, backgroundColor: "#047857", padding: 1.5 }}>
        <Typography sx={{ color: "#FFF", alignSelf: "center" }}>
          box1
        </Typography>
      </Box>

      <Box sx={{ ...paperStyles, backgroundColor: "#ef4444", padding: 2.5 }}>
        <Typography sx={{ color: "#FFF", alignSelf: "center" }}>
          box2
        </Typography>
      </Box>

      <Box sx={{ ...paperStyles, backgroundColor: "#581c87", padding: 3.5 }}>
        <Typography sx={{ color: "#FFF", alignSelf: "center" }}>
          box3
        </Typography>
      </Box>
    </Paper>
  );
};

export default Flex;
