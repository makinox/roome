import React from "react";
import { FluidContainer, TopBar } from "@makinox/makinox-ui";
import NavbarStyled from "./Navbar.styled";

export default function Navbar() {
  return (
    <header
      className={`${FluidContainer()} ${TopBar()} ${NavbarStyled()} flex justify-between`}
      style={{ background: "red" }}
    >
      <div>
        <span>Roome</span>
      </div>
      <div>
        <span>H</span>
        <span>L</span>
        <span>O</span>
      </div>
    </header>
  );
}
