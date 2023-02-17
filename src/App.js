import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation";
import Home from "./Routes/Home/Home";
import Auth from "./Routes/Authentication/Auth";
import Shop from "./Routes/Shop/Shop";
import CheckOut from "./Components/CheckOutComponent/CheckOut";
const App = () => {
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
