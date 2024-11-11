import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SIGNIN } from "../../api/api";

const initialState = {
  user: {},
  login: {
    userLoggedIn: false,
    message: "",
    error: "",
  },
  register: {
    userRegistered: false,
    message: "",
    error: "",
  },
};

export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
  // console.log("test test");

  const response = await axios.post(SIGNIN, data);
  // console.log("response", response);
  // console.log("response data", response.data);

  return response.data;
});

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data) => {
    const response = await axios.post(SIGNUP, data);
    // console.log("response", response.data);

    // console.log("response data", response.data.data);
    // console.log("response status", response.data.status);
    return response.data;
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state, action) {
      state.user = {};
      state.login.userLoggedIn = false;
      state.login.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload.status == 200) {
        state.register.userRegistered = true;
        state.register.message = action.payload.message;
      } else {
        // state.register.userRegistered = false;
        state.register.message = action.payload.message;
      }
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.user = action.payload.data;
        state.login.userLoggedIn = true;
        state.login.message = action.payload.message;
      } else {
        state.login.message = action.payload.message;
      }
    });
  },
});

export default AuthSlice.reducer;
export const { logout } = AuthSlice.actions;
