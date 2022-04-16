import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, getUserAlbums, getAlbumsPhoto } from "../../api";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      return await getUsers();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAlbums = createAsyncThunk(
  "users/fetchAlbums",
  async (userId, { rejectWithValue }) => {
    try {
      return await getUserAlbums(userId);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAlbumsPhoto = createAsyncThunk(
  "users/fetchAlbumsPhoto",
  async (id, { rejectWithValue }) => {
    try {
      return await getAlbumsPhoto(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  usersData: [],
  albumsData: [],
  photosData: [],
  loading: "idle",
  error: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = "pending";
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.usersData = payload;
      state.loading = "fulfilled";
    },
    [fetchAlbums.pending]: (state) => {
      state.loading = "pending";
    },
    [fetchAlbums.fulfilled]: (state, { payload }) => {
      state.albumsData = payload;
      state.loading = "fulfilled";
    },
    [fetchAlbumsPhoto.pending]: (state) => {
      state.loading = "pending";
    },
    [fetchAlbumsPhoto.fulfilled]: (state, { payload }) => {
      state.photosData = payload;
      state.loading = "fulfilled";
    },
  },
});

export default usersSlice.reducer;
