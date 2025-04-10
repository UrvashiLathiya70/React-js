import { Button, CircularProgress, useMediaQuery } from "@mui/material";
import React from "react";

const CommonButton = ({
  title = "Button",
  variant = "contained",
  color = "primary",
  size = "medium",
  icon,
  loading,
  startIcon,
  endIcon,
  width,
  fullwidth,
  mobileWidth,
  desktopWidth,
  onClick,
  customStyle,
  ...props
}) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      fullwidth={fullwidth}
      sx={{
        width: isMobile ? mobileWidth : desktopWidth,
        ...customStyle,
      }}
      className="tp-btn-sm-primary"
      endIcon={
        loading ? (
          <CircularProgress color="primary" size={20} thickness={5} />
        ) : (
          endIcon
        )
      }
      {...props}
    >
      {title}
    </Button>
  );
};

export default CommonButton;
