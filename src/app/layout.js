import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Product Landing page",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
