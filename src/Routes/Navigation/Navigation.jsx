import React from "react";
import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLinksContainer,
} from "./NavigationStyles";
import { Outlet } from "react-router-dom";
import crown from "../../assets/crown.svg";
import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { signOutUser } from "../../Utils/firebaseUtils/firebaseutils";
import CartIcon from "../../Components/CartIcon/CartIcon";
import CartDropDown from "../../Components/CartDropDown/CartDropDown";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <div>
            <img src={crown} alt="" />
          </div>
        </LogoContainer>
        <NavLinksContainer>
          <NavLinks to="/shop">shop</NavLinks>
          {currentUser ? (
            <NavLinks onClick={signOutUser}>sign Out</NavLinks>
          ) : (
            <NavLinks to="/auth">Sign In</NavLinks>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
