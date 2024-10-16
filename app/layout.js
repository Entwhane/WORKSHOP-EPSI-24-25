import localFont from "next/font/local";
import "../styles/main.css";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

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

export const metadata = {
  title: "EthiQ",
  description: "Apprendre, différement",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
