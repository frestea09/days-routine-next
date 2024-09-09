"use client";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    console.log("ganteng");
  }, []);
  return (
    <>
      <h3>hello</h3>
    </>
  );
};

export default Page;
