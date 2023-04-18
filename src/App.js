import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./Utils/firebaseUtils/firebaseutils";
import Navigation from "./Routes/Navigation/Navigation";
import Home from "./Routes/Home/Home";
import Auth from "./Routes/Authentication/Auth";
import Shop from "./Routes/Shop/Shop";
import CheckOut from "./Components/CheckOutComponent/CheckOut";
import { setCurrentUser } from "./Store/User/user.action";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unSubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
