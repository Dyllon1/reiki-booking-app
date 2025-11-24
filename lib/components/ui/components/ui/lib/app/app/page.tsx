import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reiki Healing Sessions",
  description: "Book your Reiki session — in-person or distance healing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        {children}
      </body>
    </html>
  );
}
