import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "LearnX Dashboard",
  description:
    "Next-generation learning dashboard built with Next.js and Supabase",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-150px] top-[-150px] h-[600px] w-[600px] rounded-full bg-purple-600/15 blur-[120px]" />
          <div className="absolute bottom-[-150px] right-[-150px] h-[600px] w-[600px] rounded-full bg-blue-600/1 blur-[120px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
