import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Grid } from '@mui/material';

const OTPVerifyPage = ({ onVerify }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState('');

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value) || value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const finalOtp = otp.join('');
     dispatch(VerifyUsers(finalOtp)).then((response) => {
          if (response.payload.success === 1) {
            enqueueSnackbar(response?.payload?.message, { variant: 'success' });
            router.push('/');
          } else {
            enqueueSnackbar('Invalid Admin Credential', {
              variant: 'error',
              autoHideDuration: 1000,
            });
          }
        });
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 10, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          OTP Verification
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Enter the 6-digit OTP sent to your email
        </Typography>

        <Grid container spacing={1} justifyContent="center">
          {otp.map((value, index) => (
            <Grid item key={index}>
              <TextField
                id={`otp-${index}`}
                value={value}
                onChange={(e) => handleChange(e, index)}
                sx={{ width: 40 }}
              />
            </Grid>
          ))}
        </Grid>

        {error && (
          <Typography color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleSubmit}
        >
          Verify OTP
        </Button>
      </Box>
    </Container>
  );
};

export default OTPVerifyPage;
