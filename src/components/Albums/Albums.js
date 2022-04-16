import React, { Fragment } from "react";
import { Photos } from "../Photos";
import { useAlbums } from "../../utils/hooks";
import { Routes, Route, useParams } from "react-router-dom";
import { Item } from "../common/Item/Item";
import Record from "../common/Record";
import { List } from "@mui/material";

const getAlbumsRecord = () => {
  return (
    <Fragment>
      <Record label="Title" field="title" />
    </Fragment>
  );
};

const AlbumItem = ({ item }) => {
  return (
    <Item to="photos" filter={item.id} label="Photos" item={item}>
      {getAlbumsRecord().props.children}
    </Item>
  );
};

export const Albums = ({ id }) => {
  const { userId } = useParams();

  const albumsData = useAlbums(userId, id);
  if (+userId !== id) return null;
  return (
    <List>
      {albumsData.map((album) => {
        return (
          <li key={album.id}>
            <Routes>
              <Route path="/" element={<AlbumItem item={album} />}>
                <Route
                  path="photos/:albumId"
                  element={<Photos id={album.id} />}
                />
              </Route>
            </Routes>
          </li>
        );
      })}
    </List>
  );
};
