"use client";

import { Container, Stack, Typography } from "@mui/material";
import { ExperienceStepper } from "./experience-stepper";

function ExperiencePage() {
  return (
    <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 } }}>
      <Stack spacing={{ xs: 2, md: 2.5 }}>
        <Stack spacing={1}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontSize: { xs: 36, md: 48 },
              fontWeight: 600,
              lineHeight: 1.12,
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
