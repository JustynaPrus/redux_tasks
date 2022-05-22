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

export const { logIn, logOut } = isLogInSlice.actions;
export const store = configureStore({ reducer: isLogInSlice.reducer });
