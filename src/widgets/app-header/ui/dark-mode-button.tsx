"use client";

import Moon from "@/shared/icon/moon";
import Sun from "@/shared/icon/sun";
import { IconButton, Tooltip } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

export function DarkModeButton() {
  const { mode, setMode } = useColorScheme();
  const isDarkMode = mode === "dark";
  const nextMode = isDarkMode ? "light" : "dark";
  const label = isDarkMode ? "Switch to light mode" : "Switch to dark mode";

  return (
    <Tooltip title={label}>
      <IconButton
        aria-label={label}
        color="inherit"
        size="small"
        onClick={() => {
          setMode(nextMode);
        }}
        sx={{ color: "text.primary" }}
      >
        {isDarkMode ? <Sun fontSize="small" /> : <Moon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}
