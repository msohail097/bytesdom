import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BytesDom",
  description: "Transforming Ideas into Digital Masterpieces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
