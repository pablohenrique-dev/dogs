import React from "react";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Components/Footer/Footer";
import { UserStorage } from "./userContext";
import User from "./Pages/User/User";
import ProtectedRoute from "./Components/Helpers/ProtectedRoute";
import Photo from "./Components/Photo/Photo";
import ScrollToTop from "./Components/Helpers/scrollToTop";

function App() {
  return (
    <>
      <UserStorage>
        <Header />
        <main>
          <ScrollToTop />
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
            <Route path="foto/:id" element={<Photo />} />
          </Routes>
        </main>
        <Footer />
      </UserStorage>
    </>
  );
}

export default App;
