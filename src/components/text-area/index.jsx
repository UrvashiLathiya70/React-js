import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

const TextArea = ({ name, value, onChange, onBlur, error, placeholder }) => (
  <div>
    <textarea
      rows="5"
      style={{
        borderRadius: '4px',
        borderColor: error ? 'red' : 'black',
        padding: '10px',
        borderWidth: '0.5px',
        minWidth: '100%',
        maxWidth: '100%',
        minHeight: '100px',
      }}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
    <Typography sx={{ color: 'red' }}>{error}</Typography>
  </div>
);

export default TextArea;

TextArea.propTypes = {
  name: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.any,
  onBlur: PropTypes.any,
  error: PropTypes.any,
  placeholder: PropTypes.any,
};
