import type { Metadata } from "next";
import "./globals.css";
import DesignToggle from "@/components/DesignToggle";

export const metadata: Metadata = {
  title: "Vipul Bhardwaj - Full Stack Developer",
  description: "Portfolio of Vipul Bhardwaj - Front-End Developer, Competitive Coder, and Eager Learner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden bg-dark">
        <DesignToggle />
        {children}
      </body>
    </html>
  );
}
