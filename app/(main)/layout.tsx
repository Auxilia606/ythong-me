import { Box } from "@mui/material";
import type { ReactNode } from "react";

import { AppHeader } from "@/widgets/app-header";
import theme from "@/shared/theme";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        bgcolor: theme.vars.palette.background.default,
        pt: 10,
      }}
    >
      <AppHeader />
      <Box
        component="div"
        sx={{
          flex: 1,
          minHeight: 0,
          display: "flex",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
