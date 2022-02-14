import React, { useState } from "react";
import { authService } from "../fbUtil";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      // 게정 파라미터 형태 { email : string , password : string }
      let data = "";
      if (newAccount) {
        // Create Account
        data = await authService.createUserWithEmailAndPassword({
          email,
          password,
        });
      } else {
        // Log in
        data = await authService.signInWithEmailAndPassword({
          email,
          password,
        });
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
      </form>

      <div>
        <button> Coutinue With Google</button>
      </div>
    </div>
  );
};

export default Auth;
