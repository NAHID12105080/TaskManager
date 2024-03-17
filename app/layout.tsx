import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/ui/Toaster";

const font = Inter({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Task Manager",
  description:
    "Be Productive by managing tasks efficiently. Every task is a step closer to your goal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="png" href="logo.png" />
      </head>
      <body className={font.className}>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
