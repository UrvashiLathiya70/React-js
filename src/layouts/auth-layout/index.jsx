"use client";
import { Box, Grid } from "@mui/material";
import React, { Fragment } from "react";
import Image from "next/image";
import { IMAGES } from "@/assets";
import { theme } from "@/utils/theme";

export default function AuthLayout({ children }) {
  return (
    <Box>
      <Grid container minHeight="100vh">
        <Grid
          item
          xs={12}
          lg={8}
          sx={{ display: "flex", alignItems: "center" }}
        >
          {children}
        </Grid>
        <Grid
          item
          lg={4}
          sx={{ display: { xs: "none", lg: "block" }, padding: "15px" }}
        >
          <div
            style={{
              position: "relative",
              height: "100%",
            }}
          >
            <Image
              src={IMAGES.AuthCover}
              alt="Description"
              layout="fill"
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
                borderRadius: theme.style.shape.borderRadius,
              }}
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
