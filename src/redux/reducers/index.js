// eslint-disable-next-line import/no-unresolved
import { combineReducers } from '@reduxjs/toolkit';

import usersSlice from './user';
import inquirySlice from "./inquiry"
import MedicalSlice from './medical';
import categorySlice from './category';
import PromotionSlice from './promotion';
import fundraiserSlice from './fundraiser';

export const reducers = combineReducers({
  // counter: counterSlice,
  category: categorySlice,
  Users: usersSlice,
  fundraiser: fundraiserSlice,
  medical: MedicalSlice,
  promotion: PromotionSlice,
  inquiry:inquirySlice
  // auth: authSlice,
});
