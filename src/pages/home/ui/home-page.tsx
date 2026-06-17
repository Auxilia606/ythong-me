"use client";

import { Container, Stack } from "@mui/material";
import { HeroBanner } from "./hero-banner";

function HomePage() {
  return (
    <Container maxWidth="xl">
      <Stack spacing={{ xs: 2, md: 2.5 }}>
        <HeroBanner />
      </Stack>
    </Container>
  );
}

export { HomePage };
