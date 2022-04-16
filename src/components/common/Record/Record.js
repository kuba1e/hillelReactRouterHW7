import React from "react";

export const Record = ({ label, field, item }) => {
  return (
    <p className="item-subtitle">
      {label}: {item[field]}
    </p>
  );
};
