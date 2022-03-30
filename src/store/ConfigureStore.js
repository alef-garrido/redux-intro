import { configureStore } from '@reduxjs/toolkit';
import reducer from './bug-dux';

const store = () => {
  return configureStore({reducer});
};  

export default store;