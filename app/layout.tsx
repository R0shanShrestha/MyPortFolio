import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Roshan Shrestha — Full Stack Developer",
  icons: "/assets/logo/ico.png",
  description:
    "Full Stack Developer building modern web applications and business websites focused on performance, usability, and clean UI.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Web Developer",
    "Roshan Shrestha",
  ],
  openGraph: {
    title: "Roshan Shrestha — Full Stack Developer",
    description:
      "Building modern web applications and business websites focused on performance, usability, and clean UI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
