"use client";
import { ICONS } from "@/assets";
import CommonBack from "../../../components/common-back";
import CommonButton from "../../../components/common-button";
import CommonInput from "../../../components/common-input";
import { verifyOTP, verifyPasswordOTP } from "@/redux/reducers/authSlice";
import { otpverificationValidation } from "@/utils/validations";
import { Box, Container, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

const OTPVerificationPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const ForgotOTPEmail = localStorage.getItem("ForgotEmail");
  const RegisterUserData = useSelector((state) => state?.auth?.registerUser);

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
    resetForm,
  } = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: otpverificationValidation,
    onSubmit: async (values) => {
      console.log("values", values);
      if (ForgotOTPEmail) {
            dispatch(
              verifyPasswordOTP({ email: ForgotOTPEmail, otp: parseInt(values.otp) })
            ).then((response) => {
              if (response.payload.success) {
                handleSnackbar("success", response?.payload?.message);
                router.push("/auth/reset-password");
              } else {
                handleSnackbar(
                  "error",
                  response?.payload?.result?.response?.data?.message
                );
              }
            });
          } else {
            const { email } = RegisterUserData?.result;
            dispatch(verifyOTP({ email, otp: parseInt(values.otp) })).then(
              (response) => {
                if (response.payload.success) {
                  handleSnackbar("success", response?.payload?.message);
                  router.push("/");
                } else {
                  handleSnackbar("error", response?.payload?.message?.message);
                }
              }
            );
          }
    },
  });

  const handleVerifyOTP = () => {
    if (!isValidating) {
      handleSubmit();
    }
  };

  return (
    <Fragment>
      <Container maxWidth="xs">
        <CommonBack />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Typography variant="h4">OTP Verification</Typography>
              <ICONS.Verification size={25} style={{ color: "orange" }} />
            </Box>
            <Box>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Typography variant="body1">We sent you a code</Typography>
                <Typography sx={{ marginTop: "10px" }}>******</Typography>
              </Box>

              <Typography variant="body1">
                Please enter it below to verify your email
              </Typography>
            </Box>
            <CommonInput
              label="Enter OTP"
              fullWidth={true}
              name="otp"
              onChange={handleChange}
              value={values.otp}
              onBlur={handleBlur}
              error={touched.otp && errors.otp}
            />
          </Box>
          <CommonButton
            title="Verify OTP"
            fullWidth={true}
            type="submit"
            onClick={handleVerifyOTP}
          />
        </Box>
      </Container>
    </Fragment>
  );
};

export default OTPVerificationPage;
