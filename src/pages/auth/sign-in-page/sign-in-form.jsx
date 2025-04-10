"use client";
import CommonButton from "@/components/common-button";
import CommonInput from "@/components/common-input";
import { Box } from "@mui/system";
import React from "react";
import { useFormik } from "formik";
import { signInValidation } from "@/utils/validations";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "@/redux/reducers/authSlice";
import { useSnackbar } from "notistack";
import CommonPassword from "@/components/common-passwordinput";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignInForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const handleSnackbar = (variant, message) => {
    enqueueSnackbar(message, {
      variant,
      autoHideDuration: 2000,
    });
  };

  const {
    handleChange,
    handleSubmit,
    touched,
    handleBlur,
    values,
    errors,
    isValidating,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInValidation,
    onSubmit: async (values) => {
      dispatch(login(values)).then((response) => {
        if (response?.payload?.success && response?.payload?.role === "Admin") {
          handleSnackbar("success", response?.payload?.message);
          router.push("/");
        } else {
          handleSnackbar("error", "You are not authorized to access this page");
        }
      });
    },
  });

  const handleSignIn = () => {
    if (!isValidating) {
      handleSubmit();
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
      <CommonInput
        label="Email"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && errors.email}
        fullWidth={true}
      />
      <CommonPassword
        label="Password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && errors.password}
        fullWidth={true}
      />
      <Link href="/auth/forgot-password" style={{ textDecoration: "none" }}>
        <Typography
          variant="subtitle1"
          color="primary"
          sx={{ textAlign: "right", cursor: "pointer" }}
        >
          Forgot Password ?
        </Typography>
      </Link>

      <CommonButton title="Sign In" fullWidth={true} onClick={handleSignIn} />
    </Box>
  );
};

export default SignInForm;
