import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Background from "@/components/Background";
import ThemeController from "@/components/ThemeController";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Onkar - Portfolio",
  description: "Futuristic Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Background />
          <ThemeController />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
