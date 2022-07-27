import { configureStore } from '@reduxjs/toolkit';
import amiibos from './amiibos';

const store = configureStore({
  reducer: {
    amiibos,
  },
});

export default store;
