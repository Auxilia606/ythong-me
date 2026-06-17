"use client";

import { Container, Stack } from "@mui/material";
import { HeroBanner } from "./hero-banner";
import { TechnicalHighlights } from "./technical-highlights";

function HomePage() {
  return (
    <Container maxWidth="xl">
      <Stack spacing={{ xs: 2, md: 2.5 }}>
        <HeroBanner />
        <TechnicalHighlights />
      </Stack>
    </Container>
  );
}

export { HomePage };
