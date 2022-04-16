import React from "react";
import { Photos } from "../Photos";
import { Routes, Route, useParams, Outlet, Link } from "react-router-dom";
import { useAlbums } from "./hooks";

const AlbumItem = ({ album }) => {
  return (
    <>
      <p>album: {album.title}</p>
      <Link to={`${album.id}/photos`}>Photos</Link>
      <Outlet />
    </>
  );
};

export const Albums = ({ id }) => {
  const { userId } = useParams();
  
  const albumsData = useAlbums(userId, id);
  if (+userId !== id) return null;
  return (
    <ul>
      {albumsData.map((album) => {
        return (
          <li key={album.id}>
            <Routes>
              <Route path="/" element={<AlbumItem album={album} />}>
                <Route
                  path=":albumId/photos"
                  element={<Photos id={album.id} />}
                />
              </Route>
            </Routes>
          </li>
        );
      })}
    </ul>
  );
};
