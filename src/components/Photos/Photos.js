import { usePhotos } from "./hooks";
import { useParams } from "react-router-dom";

const PhotoItem = ({ photo }) => {
  console.log(photo);
  return (
    <>
      <p>Photo: {photo.title}</p>
      <img src={photo.thumbnailUrl} />
    </>
  );
};

export const Photos = ({ id }) => {
  const { albumId } = useParams();
  const photosData = usePhotos(albumId, id);
  if (+albumId !== id) return null;
  return (
    <ul>
      {photosData.map((photo) => {
        return (
          <li key={photo.id}>
            <PhotoItem photo={photo} />
          </li>
        );
      })}
    </ul>
  );
};
