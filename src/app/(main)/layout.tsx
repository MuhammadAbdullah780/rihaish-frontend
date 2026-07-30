import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif",
  weight: ["600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rihaish",
  description: "Verified real estate in Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif4.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-page font-sans text-ink-900">
        {children}
      </body>
    </html>
  );
}
