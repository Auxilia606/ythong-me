"use client";

import { Container, Stack, Typography } from "@mui/material";
import { ExperienceStepper } from "./experience-stepper";

function ExperiencePage() {
  return (
    <Container maxWidth="xl">
      <Stack spacing={{ xs: 2, md: 2.5 }}>
        <Stack spacing={1}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontWeight: 600,
            }}
          >
            Career Journey
          </Typography>
          <Typography color="textSecondary">
            A structured overview of my professional growth, technical
            leadership roles, and contributions to high-impact projects within
            the technology sector.
          </Typography>
        </Stack>

        <ExperienceStepper />
      </Stack>
    </Container>
  );
}

export { ExperiencePage };
