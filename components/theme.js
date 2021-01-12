import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../constants/theme";

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
