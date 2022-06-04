<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { StyledNav, StyledLink } from "./NavigationMenu.styles";

export const NavigationMenu = () => {
  return (
    <div>
      <h2>Szkolenie 4</h2>
      <StyledNav>
        <Link to="/redux_tasks/task_one" style={{ textDecoration: "none" }}>
          <StyledLink>Zadanie 1</StyledLink>
        </Link>
        <Link to="/redux_tasks/task_two" style={{ textDecoration: "none" }}>
          <StyledLink>Zadanie 2</StyledLink>
        </Link>
      </StyledNav>
    </div>
  );
};
=======
import React from "react";
import { Link } from "react-router-dom";
import { StyledNav, StyledLink } from "./NavigationMenu.styles";

export const NavigationMenu = () => {
  return (
    <div>
      <h2>Szkolenie 4</h2>
      <StyledNav>
        <Link to="/redux_tasks/task_one" style={{ textDecoration: "none" }}>
          <StyledLink>Zadanie 1</StyledLink>
        </Link>
        <Link to="/redux_tasks/task_two" style={{ textDecoration: "none" }}>
          <StyledLink>Zadanie 2</StyledLink>
        </Link>
      </StyledNav>
    </div>
  );
};
>>>>>>> f36d9c31cfbf4ff0a43d5b0cfd94ad861324c6bc
