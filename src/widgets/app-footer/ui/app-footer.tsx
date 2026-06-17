"use client";

import Github from "@/shared/icon/github";
import Linkedin from "@/shared/icon/linkedin";
import theme from "@/shared/theme";
import { Box, Container, IconButton, Stack } from "@mui/material";
import Link from "next/link";

export function AppFooter() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 2,
        py: 2,
        minHeight: 72,
        borderTop: "1px solid",
        borderColor: theme.vars.palette.divider,
        backgroundColor: theme.vars.palette.background.paper,
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            LinkComponent={Link}
            href="https://www.linkedin.com/in/%EC%98%81%ED%83%9D-%ED%99%8D-724b22117/"
            target="_blank"
          >
            <Linkedin />
          </IconButton>
          <IconButton
            LinkComponent={Link}
            href="https://github.com/Auxilia606"
            target="_blank"
          >
            <Github />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
