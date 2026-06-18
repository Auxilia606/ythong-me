"use client";

import theme from "@/shared/theme";
import { AppBar, Button, Container, Stack, Toolbar } from "@mui/material";
import Link from "next/link";
import { DarkModeButton } from "./dark-mode-button";

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
        py: { xs: 0.75, sm: 1 },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          variant="dense"
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "stretch", sm: "center" },
            justifyContent: "space-between",
            gap: { xs: 0.5, sm: 2 },
            minHeight: "100%",
          }}
        >
          <Button
            component={Link}
            href="/"
            sx={{
              alignSelf: { xs: "flex-start", sm: "center" },
              fontWeight: 600,
              px: { xs: 0, sm: 1 },
              whiteSpace: "nowrap",
            }}
          >
            Youngtaek Hong
          </Button>

          <Stack
            direction="row"
            sx={(theme) => ({
              alignItems: "center",
              gap: { xs: 0.25, sm: 0 },
              maxWidth: "100%",
              overflowX: "auto",
              pb: { xs: 0.25, sm: 0 },
              scrollbarWidth: "none",
              [theme.breakpoints.down("sm")]: {
                mx: -1,
                px: 1,
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              },
            })}
          >
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
            <DarkModeButton />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
