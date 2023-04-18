import React from "react";
import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLinksContainer,
} from "./NavigationStyles";
import { Outlet } from "react-router-dom";
import crown from "../../assets/crown.svg";

import { signOutUser } from "../../Utils/firebaseUtils/firebaseutils";

import CartIcon from "../../Components/CartIcon/CartIcon";
import CartDropDown from "../../Components/CartDropDown/CartDropDown";
import { selectCurrentUser } from "../../Store/User/user.Selector";
import { useSelector } from "react-redux";
import { selectIsCartOpen } from "../../Store/Cart/cart.selector";
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  // const currentUser = useSelector((state) => state.user.currentUser);  for reuse purpose its changed to selector file inside store
  const isCartOpen = useSelector(selectIsCartOpen);

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
