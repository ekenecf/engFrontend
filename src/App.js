import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Verify from "./components/Verify";
import ForgotPassword from "./components/ForgotPassword";
import NewPassword from "./components/NewPassword";
import Private from "./Private";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route element={<Private />}>
            <Route path="/dashboard/:userId" element={<Dashboard />} />
          </Route>
          <Route path="/users/verifyuser/:id" element={<Verify />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            path="/users/resetpassword/:resetToken"
            element={<NewPassword />}
          />
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
