import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const BASE_URL = "https://63e8ca9b5f3e35d898f59067.mockapi.io/users";
export const createUser = createAsyncThunk("createUser", async (data) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json ",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  return result;
});

//~~~~~~~GET_FN
export const showUser = createAsyncThunk("get/users", async () => {
  return await axios.get(BASE_URL).then((res) => res.data);
});

// ~~~~~~DELETE_FN
export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
  return await axios.delete(BASE_URL + "/" + id).then((res) => res.data);
});

//~~~~~~~PUT_FN
export const updateUser = createAsyncThunk("updateUser", async (payload) => {
  return await axios
    .put(`${BASE_URL}/${payload.id}`, payload.data)
    .then((res) => res.data);
});

// ~~~~~~GET_UPDATE_DATA
export const getUser = createAsyncThunk("get/user", async (id) => {
  return await axios.get(`${BASE_URL}/${id}`).then((res) => res.data);
});

export const userDetails = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    user: {},
    loading: false,
    error: null,
    isDelete: null,
  },

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~CREADE~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // ~~~~~~~~~~~~~~~~~~~~~~READ~~~~~~~~~~~~~~~~~~~~

    builder.addCase(showUser.pending, (state) => {
      state.loading = true;
      state.isUpdate = "pending";
    });
    builder.addCase(showUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isUpdate = "succes";
      state.users = action.payload;
    });
    builder.addCase(showUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // ~~~~~~~~~~~~~~~~~~~~~~~~~UPDATE~~~~~~~~~~~~~~~~~~~~~~~~~~

    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.error.message;
      });

    // ~~~~~~~~~~~~~~~~~~~~~~~~~DELETE~~~~~~~~~~~~~~~~~~~~~~~~~~

    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
      state.isDelete = "pending delete";
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isDelete = "successful delete";
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default userDetails.reducer;
