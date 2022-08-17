import React from "react";
import { Grid, Box, Container } from "@mui/material";
import { locations as cardLocations } from "data/mock-data";
import CarouselCard from "./CarouselCard";

const LocationCard = () => {
  const [cards] = React.useState(cardLocations);
  if (!cards.length) {
    return null;
  }
  return (
    <Container sx={{ mb: 3 }} maxWidth="xl">
      <Box sx={{ mx: 2 }}>
        <Grid container rowSpacing={3} columnSpacing={3}>
          {cards.map((location) => {
            return (
              <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
                <CarouselCard location={location} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default LocationCard;
