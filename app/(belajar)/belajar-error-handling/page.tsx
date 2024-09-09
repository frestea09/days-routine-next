"use client";
import { useActionState } from "react";

export default function ErrorHandlingPage() {
  const increment = async (prevState: any, formData: any) => {
    return prevState + 1;
  };
  const [state, formAction] = useActionState(increment, 0);
  return (
    <>
      <p>Hello world</p>
      <p>State : {state}</p>
      <form>
        <button formAction={formAction}>Increse</button>
      </form>
    </>
  );
}
