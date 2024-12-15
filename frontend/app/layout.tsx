import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "@/components/navbar/navbar";
import { FloatingDockMain } from "@/components/dock/main-dock";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-[#131313] flex flex-col h-full">
        <main className="flex-grow">{children}</main>
        {/* Dock fixed at the bottom */}
        <div className="fixed bottom-0 left-0 w-full z-50">
          <FloatingDockMain />
        </div>
      </body>
    </html>
  );
}
