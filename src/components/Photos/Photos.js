import React from "react";
import "./Photos.css";
import { usePhotos } from "../../utils/hooks";
import { useParams } from "react-router-dom";
import { ListItem, List, ListItemAvatar, ListItemText } from "@mui/material";

export const Photos = ({ id }) => {
  const { albumId } = useParams();
  const photosData = usePhotos(albumId, id);
  if (+albumId !== id) return null;
  return (
    <List>
      {photosData.map((photo) => {
        return (
          <ListItem
            divider
            sx={{
              justifyContent: "center",
            }}
            key={photo.id}
          >
            <ListItemAvatar
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ListItemText>{photo.title}</ListItemText>
              <img
                className="album-photo"
                src={`${photo.thumbnailUrl}`}
                alt="album"
              />
            </ListItemAvatar>
          </ListItem>
        );
      })}
    </List>
  );
};
