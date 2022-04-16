import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getUsers = async () => {
  try {
    const response = await usersApi.get("users");
    if (response.status / 100 >= 3) {
      throw new Error(response.status);
    }
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserAlbums = async (id) => {
  try {
    const response = await usersApi.get(`users/${id}/albums`);
    if (response.status / 100 >= 3) {
      throw new Error(response.status);
    }
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAlbumsPhoto = async (id) => {
  try {
    const response = await usersApi.get(`albums/${id}/photos`);
    if (response.status / 100 >= 3) {
      throw new Error(response.status);
    }
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
