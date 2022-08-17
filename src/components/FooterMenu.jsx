import React from "react";
import { Typography, Stack, Box, Button } from "@mui/material";
import { FaSearch, FaRegHeart, FaRegUserCircle } from "react-icons/fa";

const footerMenu = [
  { id: 1, text: "Explore", icon: <FaSearch size={18} /> },
  { id: 2, text: "Wishlist", icon: <FaRegHeart size={18} /> },
  { id: 3, text: "Login", icon: <FaRegUserCircle size={18} /> },
];

const FooterMenu = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
      <Stack>
        {footerMenu.map((item) => {
          return (
            <Button key={item.id}>
              <Stack
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                direction="column"
                spacing={1}
              >
                {item.icon}
                <Typography> {item.text}</Typography>
              </Stack>
            </Button>
          );
        })}
      </Stack>
    </Box>
  );
};

export default FooterMenu;
