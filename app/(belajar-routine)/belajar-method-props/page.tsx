"use client";
import { useState } from "react";
import { PenerimaProps } from "./PenerimaProps";

const Pages = () => {
  type dataProps = {
    name: string;
    age: number;
  };
  const [data, setData] = useState<dataProps>({ name: "ganteng", age: 12 });
  const handleAge = (insertAge: number) => {
    setData((prevState) => {
      return {
        ...prevState,
        age: insertAge,
      };
    });
  };
  return (
    <>
      <h1>Belajar Method Props</h1>
      <PenerimaProps data={data} handleAge={handleAge} />
    </>
  );
};

export default Pages;
