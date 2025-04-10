import CommonButton from "../../../components/common-button";
import CommonInput from "../../../components/common-input";
import CommonSelect from "../../../components/common-select";
import { register } from "@/redux/reducers/authSlice";
import { ROLESLIST } from "../../../utils/constant";
import { signUpValidation } from "../../../utils/validations";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import CommonPassword from "../../../components/common-passwordinput";

const SignupForm = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

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
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      role: "",
      password: "",
    },
    validationSchema: signUpValidation,
    onSubmit: async (values) => {
      dispatch(register(values)).then((response) => {
        const erroString =
          response.payload.message.message ??
          response.payload.result.response?.data.message;
        if (response.payload.success) {
          handleSnackbar("success", response?.payload?.message);
          router.push("/auth/otp-verification");
        } else {
          handleSnackbar("error", erroString);
        }
      });
    },
  });

  const handleSignUp = () => {
    if (!isValidating) {
      handleSubmit();
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <CommonInput
          label="First Name"
          name="first_name"
          fullWidth={true}
          value={values.first_name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.first_name && errors.first_name}
        />
        <CommonInput
          label="Last Name"
          name="last_name"
          fullWidth={true}
          value={values.last_name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.last_name && errors.last_name}
        />
        <CommonInput
          label="Email"
          name="email"
          fullWidth={true}
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
        />
        <CommonInput
          label="Mobile"
          name="mobile"
          fullWidth={true}
          value={values.mobile}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.mobile && errors.mobile}
        />
        <CommonSelect
          label="Role"
          name="role"
          options={ROLESLIST}
          fullWidth={true}
          value={values.role}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.role && errors.role}
        />
        <CommonPassword
          label="Password"
          name="password"
          fullWidth={true}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && errors.password}
        />
      </Box>
      <CommonButton title="Sign up" fullWidth={true} onClick={handleSignUp} />
    </>
  );
};

export default SignupForm;
