"use client";
import { useState } from "react";

const Page = () => {
  const [data, setData] = useState({
    bilanganPertama: 0,
    bilanganKedua: 0,
  });
  const updateData = (inputBilanganPertama: number) => {
    setData((prevState) => {
      return {
        ...prevState,
        bilanganPertama: inputBilanganPertama,
      };
    });
  };
  return (
    <>
      <p>Number : {data.bilanganPertama}</p>
      <input
        className="p-4 m-8"
        onChange={(e) => {
          updateData(e.target.value);
        }}
      />
    </>
  );
};

export default Page;
