import { configureStore } from '@reduxjs/toolkit';
import reducer from './bug-dux';

export default function() {
  return configureStore({ reducer: reducer });
};  

