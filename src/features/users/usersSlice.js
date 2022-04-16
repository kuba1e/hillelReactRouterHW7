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
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.usersData = payload;
    },
    [fetchUsers.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [fetchAlbums.fulfilled]: (state, { payload }) => {
      state.albumsData = payload;
    },
    [fetchAlbums.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [fetchAlbumsPhoto.fulfilled]: (state, { payload }) => {
      state.photosData = payload;
    },
    [fetchAlbumsPhoto.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export default usersSlice.reducer;
