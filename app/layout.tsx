import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Hair Club | Signature by Ayyan Azhar",
  description: "Precision haircuts, beard sculpting, skin care and signature men's grooming by Ayyan Azhar at The Hair Club, Ali Town, Lahore.",
  openGraph: { title: "The Hair Club | Signature Men's Grooming", description: "Precision cuts. Considered grooming. Book your chair in Ali Town, Lahore.", type: "website" },
  icons: {
    icon: "/images/the-hair-club-logo.png",
    shortcut: "/images/the-hair-club-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
