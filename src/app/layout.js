"use client";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { theme } from "@/utils/theme";
import { SnackbarProvider } from "notistack";

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <head>
        <title>Crowd Funding</title>
        <meta name="description" content="Crowd Funding" />
      </head>
      <body
        style={{ 
          display: "flex", 
          flexDirection: "column" }}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={1}>             
                {children}           
            </SnackbarProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
