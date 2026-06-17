"use client";

import { Container, Stack } from "@mui/material";
import { HeroBanner } from "./hero-banner";
import { TechnicalHighlights } from "./technical-highlights";
import { CareerJourney } from "./career-journey";

function HomePage() {
  return (
    <Container maxWidth="xl">
      <Stack spacing={{ xs: 2, md: 2.5 }}>
        <HeroBanner />
        <TechnicalHighlights />
        <CareerJourney />
      </Stack>
    </Container>
  );
}

export { HomePage };
