import { configureStore } from '@reduxjs/toolkit';
import soldiersReducer from './soldierSlice';
import missionsReducer from './missionSlice'

const store = configureStore({
  reducer: {
    soldiers: soldiersReducer,
    missions: missionsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;