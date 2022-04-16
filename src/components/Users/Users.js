import React, { Fragment } from "react";
import List from "../List";
import Item from "../List/Item";
import { Albums } from "../Albums";

import { useUsersData } from "../../utils/hooks/useUsersData";
import { Link, Outlet, Routes, Route, useParams } from "react-router-dom";

const Record = ({ label, field, item }) => {
  return (
    <p className="item-subtitle">
      {label}: {item[field]}{" "}
    </p>
  );
};

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
    <Item to="/albums" filter="userId" label="Albums" item={item}>
      {getUsersRecord().props.children}
    </Item>
  );
};

export const UsItem = ({ user }) => {
  return (
    <>
      <p>name {user.name}</p>
      <Link to={`albums/${user.id}/`}>Albums</Link>
      <Outlet />
    </>
  );
};

export const Users = () => {
  const usersData = useUsersData();
  console.log(usersData);

  return (
    <div className="users">
      <ul>
        {usersData.map((user) => {
          return (
            <li key={user.id}>
              <Routes>
                <Route path="/" element={<UsItem user={user} />}>
                  <Route path="albums/:userId/*" element={<Albums id={user.id} />} />
                </Route>
              </Routes>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

//<List items= {usersData} ItemComponent={UserItem}></List>
