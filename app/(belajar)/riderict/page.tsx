"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PageRiderict() {
  const router = useRouter();
  return (
    <>
      <Link href={"/belajar-router"}>To Belajar Router</Link>
      <button
        onClick={() => {
          router.push("/belajar-router");
        }}
      >
        belajar Router
      </button>
    </>
  );
}
