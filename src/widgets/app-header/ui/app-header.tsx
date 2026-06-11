"use client";

import theme from "@/shared/theme";
import { AppBar, Button, Container, Stack, Toolbar } from "@mui/material";
import Link from "next/link";

export function AppHeader() {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        justifyContent: "center",
        borderBottom: "1px solid",
        borderColor: theme.vars.palette.divider,
        backgroundColor: theme.vars.palette.background.paper,
        backdropFilter: "blur(8px)",
        top: 0,
        right: 0,
        left: 0,
        py: 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          variant="dense"
          sx={{
            justifyContent: "space-between",
            gap: theme.spacing(2),
            minHeight: "100%",
            paddingInline: theme.spacing(2),
          }}
        >
          <Button component={Link} href="/">
            Youngtaek Hong
          </Button>

          <Stack direction="row">
            <Button component={Link} href="/">
              Home
            </Button>
            <Button component={Link} href="/experience">
              Experience
            </Button>
            <Button component={Link} href="/projects">
              Projects
            </Button>
            <Button component={Link} href="/skills">
              Skills
            </Button>
            <Button variant="contained">Contact me</Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
