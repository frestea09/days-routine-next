"use client";
import { useCallback, useMemo, useState } from "react";

const page = () => {
  const [isLogin, setIsLogin] = useState(false);
  const getAddition = useMemo(() => {
    return isLogin ? "login" : "false";
  }, [isLogin]);
  const handleHello = useCallback(() => {
    alert("hello");
  }, []);
  const handleLogin = useCallback(() => {
    setIsLogin((prevState) => !prevState);
  }, []);
  return (
    <>
      <h3>Hello</h3>
      <p>{getAddition}</p>
      <button onClick={handleHello}>Say Hello</button>
      <button onClick={handleLogin}>login</button>
    </>
  );
};

export default page;
