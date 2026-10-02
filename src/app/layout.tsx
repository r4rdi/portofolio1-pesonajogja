import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pesona Jogja - Rencanakan Liburan Terbaikmu",
  description: "Platform cerdas untuk eksplorasi wisata, penginapan, dan transportasi di Yogyakarta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} antialiased`}>
      <body className="min-h-screen bg-gradient-to-br from-sky-50 via-cyan-50 to-white text-slate-800 font-sans">
        {children}
      </body>
    </html>
  );
}
