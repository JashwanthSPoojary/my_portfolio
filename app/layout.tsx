import type React from "react";
import Sidebar from "@/components/sidebar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jashwanth Portfolio",
  description:
    "Personal portfolio of Jasheanth s poojary , learning full stack",
    icons:'/linkdin profile.jpeg'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 md:ml-64 min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
