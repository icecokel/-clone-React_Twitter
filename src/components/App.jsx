import React, { useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbUtil";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer> &copy; {new Date().getFullYear()} Twitter </footer>
    </>
  );
}

export default App;
