"use client";

import { Container, Stack } from "@mui/material";
import { HeroBanner } from "./hero-banner";
import { TechnicalHighlights } from "./technical-highlights";
import { CareerJourney } from "./career-journey";

function HomePage() {
  return (
    <Container maxWidth="xl">
      <Stack spacing={4}>
        <HeroBanner />
        <TechnicalHighlights />
        <CareerJourney />
      </Stack>
    </Container>
  );
}

export { HomePage };
