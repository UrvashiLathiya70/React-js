import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { enqueueSnackbar } from 'notistack';

import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';
import { login } from 'src/redux/reducers/user';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';


export default function RegisterView() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    FristName:'',
    LastName:''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
  const { email, password, FristName, LastName } = loginData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!FristName.trim()) {
      enqueueSnackbar('First Name is required', { variant: 'error' });
      return;
    }
    if (!LastName.trim()) {
      enqueueSnackbar('Last Name is required', { variant: 'error' });
      return;
    }
  
    if (!email.trim()) {
      enqueueSnackbar('Email is required', { variant: 'error' });
      return;
    }
  
    if (!emailRegex.test(email)) {
      enqueueSnackbar('Invalid email format', { variant: 'error' });
      return;
    }
    if (!password) {
      enqueueSnackbar('Password is required', { variant: 'error' });
      return;
    }
    dispatch(UserRegister(loginData)).then((response) => {
      if (response.payload.success === 1 && response.payload.result.data.role === 'Admin') {
        localStorage.setItem('token', response?.payload?.result?.token);
        enqueueSnackbar(response?.payload?.message, { variant: 'success', autoHideDuration: 1000 });
        router.push('/otp-verify');
      } else {
        enqueueSnackbar('Invalid Admin Credential', {
          variant: 'error',
          autoHideDuration: 1000,
        });
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const renderForm = (
    <>
      <Stack spacing={3}>
      <TextField
          name="FristName"
          label="Frist Name"
          value={loginData.FristName}
          onChange={handleInputChange}
        />
         <TextField
          name="LastName"
          label="Last Name"
          value={loginData.LastName}
          onChange={handleInputChange}
        />
        <TextField
          name="email"
          label="Email address"
          value={loginData.email}
          onChange={handleInputChange}
        />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={loginData.password}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

     

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleClick}
        style={{ marginTop: '20px' }}
      >
        Register
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo sx={{ position: 'fixed', top: { xs: 16, md: 24 }, left: { xs: 16, md: 24 },width:"200px",height:"80px" }}  />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card sx={{ p: 5, width: 1, maxWidth: 420 }}>
          <Typography variant="h4" sx={{ marginBottom: '20px' }}>
            Vision Vault
          </Typography>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
