import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
// import Profile from "./page/Profile";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import ForgotPassword from "./page/ForgotPassword";
import Offers from "./page/Offers";
import CreateListing from "./page/CreateListing";
import EditListing from "./page/EditListing";
import Listing from "./page/Listing";
import Category from "./page/Category";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </div>
  );
}

export default App;
