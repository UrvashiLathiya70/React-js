import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const CommonSelect = ({
  size = "small",
  label,
  placeholder,
  options = [],
  error,
  onChange,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(""); 

  const handleOnChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onChange && onChange(newValue);
  };

  return (
    <Box>
      <Typography variant="subtitle2">{label}</Typography>
      <FormControl size={size} error={Boolean(error)} fullWidth>
        <Select
          displayEmpty
          value={selectedValue} 
          renderValue={(value) => (value ? value : <em>{placeholder}</em>)}
          onChange={handleOnChange}
          {...props}
        >
          <MenuItem disabled value="">
            <em>{placeholder}</em>
          </MenuItem>
          {options?.map((option, key) => (
            <MenuItem key={key} value={option?.value}>
              {option?.title}
            </MenuItem>
          ))}
        </Select>
        {Boolean(error) && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default CommonSelect;
