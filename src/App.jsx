import React from "react";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Components/Footer/Footer";
import { UserStorage } from "./userContext";
import Conta from "./Pages/User/Conta";
import User from "./Pages/User/User";
import ProtectedRoute from "./Components/Helpers/ProtectedRoute";

function App() {
  return (
    <>
      <UserStorage>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </UserStorage>
    </>
  );
}

export default App;
