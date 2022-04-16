import { fetchAlbums } from "../../features/users";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export const useAlbums = (userId, id) => {
  const albumsData = useSelector(({ users: { albumsData } }) => albumsData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (+userId === id) {
      dispatch(fetchAlbums(userId));
    }
  }, [userId]);

  return albumsData;
};
