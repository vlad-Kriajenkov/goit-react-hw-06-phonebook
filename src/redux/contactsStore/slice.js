import { createSlice, nanoid } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    removeContact(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, phone) {
        return {
          payload: {
            name,
            phone,
            id: nanoid(),
          },
        };
      },
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const tasksReducer = contactsSlice.reducer;
