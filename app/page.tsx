"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  console.log({ session });
  return (
    <>
      <h3>Welcome ganteng</h3>
    </>
  );
}
