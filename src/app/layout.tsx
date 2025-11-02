import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Poppins  } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], 
});

const monaSans = localFont({
  src: './fonts/MonaSans-Regular.ttf',
  variable: "--font-monaSans",
  display: 'swap',
})
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"], 
  variable: "--font-poppins", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lu Network",
  description: "Available for all your digital crypto tradings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${monaSans.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
