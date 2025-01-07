import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Mission } from "../types/mission";
import axios from "axios";

interface MissionState {
    data: Mission[];
    loading: boolean;
    error: string | null;
  } 


const initialState: MissionState = {
    data: [],
    loading: false,
    error: null,
  };

  const fetchMissionsFromAPI = async (): Promise<Mission[]> => {

    const allMissions :Mission[]=  (await axios('http://localhost:3000/missions')).data;
    return allMissions;
  };


  export const fetchmission = createAsyncThunk('missions', async () => {
    return await fetchMissionsFromAPI();
  });


  const missionsSlice = createSlice({
    name: 'missions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // Fetch Soldiers
        .addCase(fetchmission.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchmission.fulfilled, (state, action: PayloadAction<Mission[]>) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchmission.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to fetch soldiers';
        })
    },
  });
  
  export default missionsSlice.reducer;