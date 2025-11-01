import "./globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

// load Inter font
const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Auto Car WindScreen Ltd",
  description: "Fast, reliable Auto WindScreen repair service in Birmingham",
};

// layout wrapper
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
