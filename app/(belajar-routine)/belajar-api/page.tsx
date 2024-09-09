"use client";
import { useState } from "react";
import { useFetch } from "./useFetch";
import { mutate } from "swr";
import { createData } from "./api";

const Page = () => {
  type propsDataInput = {
    title: string;
    body: string;
  };
  const [dataInput, setDataInput] = useState<propsDataInput>({});
  const { data, mutate } = useFetch("/users");
  const handleInput = (inputTitle: string) => {
    setDataInput((prevState) => ({ ...prevState, title: inputTitle }));
  };
  const handleInputBody = (inputTitle: string) => {
    setDataInput((prevState) => ({ ...prevState, body: inputTitle }));
  };
  const handlePost = async () => {
    try {
      await createData("/posts", dataInput);
      mutate();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h3>Selamat Data di Belajar Api</h3>
      <p>Title : {dataInput.title}</p>
      <p>Body : {dataInput.body}</p>
      <div className="flex flex-col w-[50%] px-5 gap-2">
        <input
          name="title"
          className="border-2"
          onChange={(event) => handleInput(event.target.value)}
        />
        <input
          name="body"
          className="border-2"
          onChange={(event) => handleInputBody(event.target.value)}
        />
        <button onClick={handlePost}>Save</button>
      </div>
    </>
  );
};

export default Page;
