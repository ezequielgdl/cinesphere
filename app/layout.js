import { Inter, Lora } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "FilmDB",
  description: "Generated by Ezequiel Gómez de Lima",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={lora.className}
        // style={{
        //   minHeight: "100vh",
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        //   width: "90vw",
        // }}
      >
        <NavBar />
        <Suspense fallback={<Loading />}>
          <div>{children}</div>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
