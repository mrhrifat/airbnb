import { Box, CssBaseline } from "@mui/material";
import Footer from "components/Footer";
import FooterMenu from "components/FooterMenu";
import Header from "components/Header";
import LocationCard from "components/LocationCard";
import MobileFooter from "components/MobileFooter";
import OptionsTab from "components/OptionTabs";
import React from "react";
import { displayOnDesktop } from "themes/commonStyles";

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
          <OptionsTab />
          <LocationCard />
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <MobileFooter />
          </Box>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Root;
