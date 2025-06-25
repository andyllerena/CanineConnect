// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Canine Connect – Find Your Perfect Companion",
  description:
    "Search adoptable pets from shelters, rescues, and individuals. Find dogs, cats, and other pets ready for their forever homes.",
  keywords: "pet adoption, dogs, cats, rescue, shelter, adopt pet",
  authors: [{ name: "Canine Connect Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* theme & color‐scheme meta tags */}
        <meta name="theme-color" content="#7dd3fc" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.ico" />

        {/* preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Sour Gummy import */}
        <link
          href="https://fonts.googleapis.com/css2?family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--bg)] text-[var(--fg)] antialiased">
        <div className="relative min-h-screen">{children}</div>
        <div id="modal-root" />
      </body>
    </html>
  );
}
