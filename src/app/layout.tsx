import type { Metadata } from "next";
import NavBar from "./components/navigation/NavBar";
import Footer from "./components/footer/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "SI Tracker",
  description:
    "Record all your Spirit Island game sessions or explore the different Spirits and Adversaries currently in the game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
