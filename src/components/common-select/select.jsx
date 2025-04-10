import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { theme } from "@/utils/theme";

export default function SelectMenu({
  label,
  value,
  onChange,
  options,
  helperText,
  ...props
}) {
  return (
    <FormControl fullWidth>
      <Typography variant="subtitle2">{label}</Typography>
      <Select value={value} onChange={onChange} {...props}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
      {helperText ? <Typography sx={{color: theme.palette.error.main, fontWeight: 400, fontSize: '0.75rem', mx: 2}} variant="p">{helperText || ''}</Typography> : null}
    </FormControl>
  );
}
