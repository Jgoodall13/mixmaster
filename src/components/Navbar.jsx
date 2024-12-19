import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/Navbar";

const StyledBtn = styled.button`
  background: green;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  transition: 200ms ease-in-out;
  border-radius: 20rem;
  &:hover {
    background: red;
  }
`;

function Navbar() {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link" end>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/cocktail" className="nav-link">
            Cocktail
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
