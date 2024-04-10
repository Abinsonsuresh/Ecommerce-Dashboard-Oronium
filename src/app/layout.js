
import "./globals.css";
import Navbar from "@/components/Navbar/Main/Navbar";
import { Inter, Roboto_Mono, Urbanist } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 
 
const Urbanist_font = Urbanist({
  subsets: ['latin'],
  variable: '--font-Urbanist',
  display: 'swap',
})

export const metadata = {
  title: "Oronium E-Commerce Storep",
  description: "Oronium E-Commerce Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${inter.variable} ${Urbanist_font.variable} `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
