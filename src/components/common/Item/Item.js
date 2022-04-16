import React, { Children } from "react";
import { Link, Outlet } from "react-router-dom";
import { Card } from "@mui/material";

export const Item = ({ item, filter, children, to, label, ...props }) => {
  return (
    <Card
      sx={{
        width: "100%",
      }}
    >
      {Children.map(children, (child) => {
        return React.cloneElement(child, { item });
      })}
      <Link to={`${to}/${filter}`}>{label}</Link>
      <Outlet />
    </Card>
  );
};
