import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import MainLayout from "@/components/ui/MainLayout"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Share Sheetmusic Service by sheetmusic.kr",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
