import "./globals.css";

import React from "react";
import { Analytics } from "@vercel/analytics/next";
import { serif, sans } from "./fonts";

export const metadata = {
  title: "Leonardo Lindemberg",
  description:
    "Software Engineer at Google, University of Michigan alum. Building fast, thoughtful software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <link rel="shortcut icon" href="/Logo.jpeg" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
