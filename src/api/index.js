
import client, { METHODS } from './client';

export const api = {
  Users: {
    login: (params) =>
      client({
        url: "/api/login",
        data: params,
        method: METHODS.POST,
      }),
    register: (params) =>
      client({
        url: "/api/registration",
        data: params,
        method: METHODS.POST,
      }),
    verifyOTP: (params) =>
      client({
        url: "/api/verifyotp",
        data: params,
        method: METHODS.PATCH,
      }),

    verifyPasswordOTP: (params) =>
      client({
        url: "/api/verifypasswordupdate",
        data: params,
        method: METHODS.POST,
      }),
  
  },


  
};
