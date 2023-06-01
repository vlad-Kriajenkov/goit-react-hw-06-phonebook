import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contactsStore/slice";
import { filterSlice } from "./filterContact/slice";
export const store = configureStore({
  reducer: {
    contactsSlice: contactsSlice.reducer,
    filterSlice: filterSlice.reducer,
  },
});
