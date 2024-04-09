import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Main/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oronium E-Commerce Storep",
  description: "Oronium E-Commerce Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
