"use client";

import { FormControlLabel, Switch } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

export function DarkModeSwitch() {
  const { mode, setMode } = useColorScheme();

  return (
    <FormControlLabel
      control={
        <Switch
          size="small"
          checked={mode === "dark"}
          slotProps={{ input: { "aria-label": "Toggle dark mode" } }}
          onChange={(event) => {
            setMode(event.target.checked ? "dark" : "light");
          }}
        />
      }
      label="Dark Mode"
      labelPlacement="start"
    />
  );
}
