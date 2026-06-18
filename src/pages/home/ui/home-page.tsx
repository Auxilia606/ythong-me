"use client";

import { Container, Stack } from "@mui/material";
import { HeroBanner } from "./hero-banner";
import { TechnicalHighlights } from "./technical-highlights";
import { CareerJourney } from "./career-journey";
import { InterestingProblems } from "./interesting-problems";

function HomePage() {
  return (
    <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 } }}>
      <Stack spacing={{ xs: 3, md: 4 }}>
        <HeroBanner />
        <TechnicalHighlights />
        <InterestingProblems />
        <CareerJourney />
      </Stack>
    </Container>
  );
}

export { HomePage };
