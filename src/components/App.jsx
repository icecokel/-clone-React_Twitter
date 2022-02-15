import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbUtil";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  useEffect(() => {
    const auth = getAuth();
    !init &&
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
        setInit(true);
      });
  }, []);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer> &copy; {new Date().getFullYear()} Twitter </footer>
    </>
  );
}

export default App;
