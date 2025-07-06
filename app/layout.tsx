import type { Metadata } from "next";
import "./ui/globals.css";
import { inter, geistMono, geistSans } from "./ui/fonts";

export const metadata: Metadata = {
  title: "CapiShop",
  description: "Tu tienda favorita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
