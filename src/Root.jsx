import { Box, CssBaseline } from "@mui/material";
import Header from "components/Header";
import React from "react";

const Root = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header />
        </Box>
      </Box>
    </>
  );
};

export default Root;
