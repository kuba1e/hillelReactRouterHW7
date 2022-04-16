import React, { Fragment } from "react";
import { List, ListItem } from "@mui/material";
import { Item } from "../common/Item/Item";
import { Albums } from "../Albums";
import Record from "../common/Record";
import { useUsersData } from "../../utils/hooks/useUsersData";
import { Routes, Route } from "react-router-dom";

const getUsersRecord = () => {
  return (
    <Fragment>
      <Record label="Name" field="name" />
      <Record label="Email" field="email" />
      <Record label="Phone" field="phone" />
      <Record label="Website" field="website" />
    </Fragment>
  );
};

const UserItem = ({ item }) => {
  return (
    <Item to="albums" filter={item.id} label="Albums" item={item}>
      {getUsersRecord().props.children}
    </Item>
  );
};

export const Users = () => {
  const usersData = useUsersData();

  return (
    <List>
      {usersData.map((user) => {
        return (
          <ListItem
            divider
            sx={{
              justifyContent: "center",
            }}
            key={user.id}
          >
            <Routes>
              <Route path="/" element={<UserItem item={user} />}>
                <Route
                  path="albums/:userId/*"
                  element={<Albums id={user.id} />}
                />
              </Route>
            </Routes>
          </ListItem>
        );
      })}
    </List>
  );
};
