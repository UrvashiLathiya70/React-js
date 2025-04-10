"use client";
import { Box, Container, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useRouter } from "next/navigation";
import { theme } from "@/utils/theme";
import { ICONS } from "@/assets";

import SignInForm from "./sign-in-form";
import CommonBack from "../../../components/common-back";
import Link from "next/link";

export default function SignInPage() {

  return (
    <Fragment>
      <Container maxWidth="xs">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
          <CommonBack />
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography variant="h4">Welcome Back</Typography>
            <ICONS.Hand
              color="orange"
              size={25}
              style={{ marginBottom: "10px" }}
            />
          </Box>
          <Box>
            <Typography variant="body1">
              Empowering Change, One Contribution at a Time.
            </Typography>
            <Typography variant="body1">
              Sign in to manage your fundraisers & track donations.
            </Typography>
          </Box>
          <SignInForm />
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
            Dont{"'"}t have an account ?{" "}
            <Link href="/auth/sign-up" style={{ textDecoration: "none" }}>
              <span
                style={{ color: theme.palette.primary.main, cursor: "pointer" }}
              >
                Sign up
              </span>
            </Link>
          </Typography>
        </Box>
      </Container>
    </Fragment>
  );
}
