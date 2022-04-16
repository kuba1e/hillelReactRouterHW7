import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "@mui/material";
import { Users } from "../Users";

export const App = () => {
  return (
    <Container maxWidth="sm">
      <Router>
        <Users />
      </Router>
    </Container>
  );
};
