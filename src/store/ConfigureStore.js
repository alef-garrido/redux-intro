import { configureStore } from '@reduxjs/toolkit';
import reducer from './projects-dux';

export default function() {
  return configureStore({ reducer: reducer });
};  

