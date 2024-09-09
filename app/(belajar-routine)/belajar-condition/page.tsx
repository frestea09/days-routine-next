"use client";
import { useState } from "react";

const Page = () => {
  type data = {
    name: string;
    isLogin: boolean;
  };
  const [data, setData] = useState<data>({ name: "ilman", isLogin: false });
  const handleLogin = () => {
    setData((prevState) => ({
      ...prevState,
      isLogin: !prevState.isLogin,
    }));
  };
  const handleName = (insertName: string) => {
    setData((prevState) => ({
      ...prevState,
      name: insertName,
    }));
  };
  const status = data.isLogin ? "login" : "not login";
  return (
    <>
      <h3>Belajar Condition</h3>
      <p>User : {data.name}</p>
      <p>Status : {status}</p>
      <input
        name="inputName"
        onChange={(event) => {
          handleName(event.target.value);
        }}
      />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Page;
