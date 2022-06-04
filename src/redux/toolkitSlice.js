import { createSlice, configureStore } from "@reduxjs/toolkit";

export const isLogInSlice = createSlice({
  name: "isLogIn",
  initialState: { loggedIn: false },
  reducers: {
    logIn: (state) => {
      state.loggedIn = true;
    },
    logOut: (state) => {
      state.loggedIn = false;
    },
  },
});

export const customersTableSlice = createSlice({
  name: "customersTable",
  initialState: {
    data: [],
    page: 1,
    limit: 3,
    sortBy: "",
  },
  reducers: {
    nextPage: (state) => {
      if (state.page < 6 / state.limit) {
        state.page += 1;
      }
    },
    prevPage: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
  },
});

export const { logIn, logOut } = isLogInSlice.actions;
export const { nextPage, prevPage } = customersTableSlice.actions;
export const store = configureStore({
  reducer: {
    isLogInSlice: isLogInSlice.reducer,
    customersTableSlice: customersTableSlice.reducer,
  },
});
