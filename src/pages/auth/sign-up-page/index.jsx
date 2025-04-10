"use client";
import React, { Fragment } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { ICONS } from "@/assets";
import { theme } from "@/utils/theme";
import SignupForm from "./sign-up-form";
import CommonBack from "@/components/common-back";
import Link from "next/link";

export default function SignUpPage() {
  const { push } = useRouter();

  return (
    <Fragment>
      <Container maxWidth="xs">
        <CommonBack />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Typography variant="h4">Sign Up</Typography>
              <ICONS.Signup
                style={{ color: "orange", height: 30, width: 30 }}
              />
            </Box>

            <Box>
              <Typography variant="body1">
                India{"'"}s largest crowdfunding site
              </Typography>
              <Typography variant="body1">
                Sign up & manage fundraisers, donations & more
              </Typography>
            </Box>

            <SignupForm />

            <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
              Dont{"'"}t have an account ?{" "}
              <Link href="/auth/sign-in" style={{textDecoration:"none"}}>
                <span
                  style={{
                    color: theme.palette.primary.main,
                    cursor: "pointer",
                  }}
                >
                  Sign in
                </span>
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
}
