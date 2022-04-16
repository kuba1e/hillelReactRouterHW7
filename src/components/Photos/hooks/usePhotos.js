import { fetchAlbumsPhoto } from "../../../features/users";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export const usePhotos = (albumId, id) => {
  const photosData = useSelector(({ users: { photosData } }) => photosData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (+albumId === id) {
      dispatch(fetchAlbumsPhoto(albumId));
    }
  }, []);

  return photosData;
};
