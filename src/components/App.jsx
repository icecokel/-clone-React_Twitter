import React, { useState } from "react";
import AppRouter from "./Router";
import fbUtil from "../fbUtil";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer> &copy; {new Date().getFullYear()} Twitter </footer>
    </>
  );
}

export default App;
