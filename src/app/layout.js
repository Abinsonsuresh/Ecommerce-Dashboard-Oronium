import "./globals.css";
import { Urbanist_font, inter } from "@/utils/fonts/fonts";
import Navbar from "@/components/Navbar/Main/Navbar";


export const metadata = {
  title: "Oronium E-Commerce Storep",
  description: "Oronium E-Commerce Store Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${inter.variable} ${Urbanist_font.variable} `}>
        <link rel="icon" href="/favicon.png" sizes="any" />

        <Navbar />
        {children}
      </body>
    </html>
  );
}
