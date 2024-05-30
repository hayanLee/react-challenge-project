import { configureStore } from '@reduxjs/toolkit';
import { counterRedcuer } from './slices/counter.slice';

const store = configureStore({
    reducer: { counter: counterRedcuer },
});

export default store;
