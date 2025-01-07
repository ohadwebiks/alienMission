import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Soldier } from '../types/Soldier';
import axios from 'axios';



interface SoldiersState {
    data: Soldier[];
    loading: boolean;
    error: string | null;
  } 


const initialState: SoldiersState = {
    data: [],
    loading: false,
    error: null,
  };

  const fetchSoldiersFromAPI = async (): Promise<Soldier[]> => {

    const allSoldiers :Soldier[]=  (await axios('http://localhost:3000/soldiers')).data;
    return allSoldiers;
  };

  const addSoldierToAPI = async (soldier: Omit<Soldier, 'id'>): Promise<Soldier> => {
    return (await axios.post('http://localhost:3000/soldiers',soldier)).data
  };
  

export const fetchSoldiers = createAsyncThunk('soldiers', async () => {
    return await fetchSoldiersFromAPI();
  });

  export const addSoldier = createAsyncThunk('soldiers/add', async (soldier: Omit<Soldier, 'id'>) => {
    return await addSoldierToAPI(soldier);
  });


const soldiersSlice = createSlice({
  name: 'soldiers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Soldiers
      .addCase(fetchSoldiers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSoldiers.fulfilled, (state, action: PayloadAction<Soldier[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSoldiers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch soldiers';
      }).addCase(addSoldier.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addSoldier.fulfilled, (state, action: PayloadAction<Soldier>) => {
        state.data.push(action.payload);
      }) .addCase(addSoldier.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to add soldiers';
      })
  },
});

export default soldiersSlice.reducer;