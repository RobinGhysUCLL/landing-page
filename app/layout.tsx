import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "robinghys.com landing",
  description: "This page is a landing page for the domain robinghys.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
