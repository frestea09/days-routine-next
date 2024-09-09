"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout(props: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  results: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{props.children}</SessionProvider>
      </body>
    </html>
  );
}
