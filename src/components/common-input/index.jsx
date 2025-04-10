import React from 'react';
import PropTypes from 'prop-types';

import { Box, TextField, Typography } from '@mui/material';

export default function CommonInput({
  label,
  fullWidth,
  type = 'text',
  variant,
  size = 'small',
  error,
  ...props
}) {
  return (
    <Box>
      <Typography variant="subtitle2">{label}</Typography>
      <TextField
        fullWidth
        size={size}
        type={type}
        {...props}
        variant={variant}
        error={Boolean(error)}
        helperText={error}
      />
    </Box>
  );
}

CommonInput.propTypes = {
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'number', 'password', 'email', '...']), // Adjust the allowed types
  variant: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']), // Adjust the allowed sizes
  error: PropTypes.bool,
  // Add any additional PropTypes as needed
};
