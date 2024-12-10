import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flights: [],
  loading: false,
};

export const groupFlightSlice = createSlice({
  name: "groupFlight",
  initialState,
  reducers: {
    setFlights(state, action) {
      state.flights = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

const groupFlightReducer = groupFlightSlice.reducer;

export const groupFlightActions = groupFlightSlice.actions;
export default groupFlightReducer;
