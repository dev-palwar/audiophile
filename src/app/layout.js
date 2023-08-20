import Navbar from "@/Components/Navbar";
import "./globals.css";
import "../Styles/Media.css"
import { Manrope } from "next/font/google";
import Footer from "@/Components/Footer";
import About from "@/Components/About";
import Prvider from "@/Redux/Provider";
import ReduxStorage from "./ReduxStorage";

const menrope = Manrope({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Audiophile",
  description: "Created by Dev Palwar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={menrope.className}>
        <Prvider>
          <ReduxStorage />
          <Navbar />
          <div>{children}</div>
          <About />
          <Footer />
        </Prvider>
      </body>
    </html>
  );
}
