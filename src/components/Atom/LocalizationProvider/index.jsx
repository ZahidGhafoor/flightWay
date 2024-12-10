"use client";

import { store } from "@/redux/store";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Provider } from "react-redux";

export default function ClientProvider({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Provider store={store}>{children}</Provider>
    </LocalizationProvider>
  );
}
