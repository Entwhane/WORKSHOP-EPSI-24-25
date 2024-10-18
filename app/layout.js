'use client';
import localFont from "next/font/local";
import "../styles/main.css";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { AuthProvider } from "./context/AuthContext";

const geistSans = localFont({
  src: "../public/fonts/clash_display_complete/Fonts/WEB/fonts/ClashDisplay-Regular.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/clash_display_complete/Fonts/WEB/fonts/ClashDisplay-Regular.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}
            style={{ minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center" }}>
      <AuthProvider>
        <NavBar />
        {children}
        <Footer />
      </AuthProvider>
      </body>
      </html>
  );
}