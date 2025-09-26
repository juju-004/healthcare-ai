import CompanyLogos from "@/components/CompanyLogos";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // you can customize weights
});

export const metadata: Metadata = {
  title: "Healthcare App",
  description: "Healthcare app for connecting patients to doctor through AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <CompanyLogos />
        <Footer />
      </body>
    </html>
  );
}
