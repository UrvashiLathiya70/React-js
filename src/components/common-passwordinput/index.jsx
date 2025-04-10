import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { theme } from "@/utils/theme";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function CommonPassword({
  label,
  fullWidth,
  variant,
  size = "small",
  error,
  ...props
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box>
      <Typography variant="subtitle2">{label}</Typography>
      <FormControl fullWidth variant="outlined">
        <OutlinedInput
          id="outlined-adornment-password"
          {...props}
          size={size}
          variant={variant}
          error={Boolean(error)}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      {error && (
        <FormHelperText sx={{ color: theme.palette.error.main, marginLeft: "15px" }}>
          {error}
        </FormHelperText>
      )}
    </Box>
  );
}
