import { combineReducers } from '@reduxjs/toolkit';
import HomeSlice from 'Components/Home/Home.slice';
import OtherSlice from 'Components/Other/Other.slice';

export default combineReducers({
  home: HomeSlice,
  other: OtherSlice,
});
