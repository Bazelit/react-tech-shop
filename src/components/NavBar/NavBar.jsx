import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { House, ShoppingCartSimple } from "phosphor-react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar className="navBar">
      <NavbarBrand>
        <NavLink to="/" className="navLink">
          <House size={42} />
        </NavLink>
      </NavbarBrand>
      <NavLink to="/">
        <h1 className="navTitle">Tech Shop</h1>
      </NavLink>
      <NavbarContent justify="end">
        <NavbarItem>
          <NavLink to="/cart" className="navLink">
            <ShoppingCartSimple size={42} />
          </NavLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
