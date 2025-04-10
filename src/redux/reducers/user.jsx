// eslint-disable-next-line import/no-unresolved
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../../api';

export const login = createAsyncThunk('users/login', async (data) => {
  try {
    const response = await api.Users.login(data);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const UserRegister = createAsyncThunk('users/register', async () => {
  try {
    const response = await api.Users.register();
    return response.data;
  } catch (error) {
    return error;
  }
});

export const VerifyUsers = createAsyncThunk('users/verifyOtp', async (data) => {
  try {
    const response = await api.Users.verifyOTP(data);

    return response.data;
  } catch (error) {
    return error;
  }
});


const initialState = {
  UserData: [],
  error: null,
  emailTemplate: null,
  uploadFile: null,
  AdminLogin: {},
};

const usersSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    setEmailTemplate: (state, action) => {
      state.emailTemplate = action.payload;
    },
    setuploadfile: (state, action) => {
      state.uploadFile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(UserList.fulfilled, (state, action) => {
      state.UserData = action.payload;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.AdminLogin = action.payload;
      state.error = null;
    });
  },
});

export const { setEmailTemplate, setuploadfile } = usersSlice.actions;

export default usersSlice.reducer;
